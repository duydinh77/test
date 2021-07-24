/**
 *
 * ToDoPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Table, Button, Space, Spin } from 'antd';
import makeSelectToDoPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

export function ToDoPage({ toDoPage, fetchToDos }) {
  useInjectReducer({ key: 'toDoPage', reducer });
  useInjectSaga({ key: 'toDoPage', saga });

  useEffect(() => {
    fetchToDos(1);
  }, []);

  const tableTitle = [
    {
      title: 'Task Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
      render: date => <span>{new Date(date).toLocaleString()}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Space>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];

  const todoList = toDoPage.todoList.data;

  return (
    <div>
      <title>ToDoPage</title>
      <meta name="description" content="Description of ToDoPage" />
      {toDoPage.isFetching ? (
        <Spin size="large" />
      ) : (
        <Table columns={tableTitle} dataSource={todoList} />
      )}
    </div>
  );
}

ToDoPage.propTypes = {
  toDoPage: PropTypes.object,
  fetchToDos: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  toDoPage: makeSelectToDoPage(),
});

const mapDispatchToProps = dispatch => ({
  fetchToDos: () => dispatch(actions.fetchToDos()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ToDoPage);
