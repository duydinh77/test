/**
 *
 * UsersPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import CardItem from 'components/CardItem';
import { Row, Col, Divider, Empty, Spin } from 'antd';
import makeSelectUsersPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

export function UsersPage({ usersPage, fetchUsers }) {
  useInjectReducer({ key: 'usersPage', reducer });
  useInjectSaga({ key: 'usersPage', saga });

  useEffect(() => {
    fetchUsers();
  }, []);

  let listUsersElement = usersPage.users.map(item => (
    <Col className="gutter-row" span={8} key={item.id}>
      <CardItem
        image={item.avatar}
        title={item.name}
        text={item.address}
        age={item.age}
      />
    </Col>
  ));

  if (!usersPage.isFetching && usersPage.totalUsers === 0) {
    listUsersElement = <Empty description={<span>No users</span>} />;
  }

  return (
    <>
      <Divider orientation="left">List Users</Divider>

      {usersPage.isFetching ? (
        <Spin size="large" />
      ) : (
        <Row gutter={16}>{listUsersElement}</Row>
      )}
    </>
  );
}

UsersPage.propTypes = {
  usersPage: PropTypes.object,
  fetchUsers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  usersPage: makeSelectUsersPage(),
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(actions.fetchUsers()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UsersPage);
