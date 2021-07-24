/*
 *
 * ToDoPage reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  isFetching: false,
  todoList: [],
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
const toDoPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.FETCH_TODO:
        draft.isFetching = true;
        break;
      case actions.FETCH_TODO_SUCCESS:
        draft.isFetching = false;
        draft.todoList = action.data;
        draft.errors = [];
        break;
      case action.FETCH_TODO_FAILURE:
        draft.isFetching = false;
        draft.errors = action.errors;
        break;
    }
  });

export default toDoPageReducer;
