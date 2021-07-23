/*
 *
 * UsersPage reducer
 *
 */
import produce from 'immer';
import * as actions from './constants';

export const initialState = {
  isFetching: false,
  users: [],
  totalUsers: 0,
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
const usersPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.FETCH_USERS:
        draft.totalUsers = 0;
        draft.isFetching = true;
        break;
      case actions.FETCH_USERS_SUCCESS:
        draft.isFetching = false;
        draft.users = action.data.data;
        draft.totalUsers = action.data.total;
        break;
      case actions.FETCH_USERS_FAILURE:
        draft.isFetching = false;
        draft.errors = action.errors;
        break;
    }
  });

export default usersPageReducer;
