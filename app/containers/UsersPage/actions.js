/*
 *
 * UsersPage actions
 *
 */

import * as constants from './constants';

export const fetchUsers = () => ({
  type: constants.FETCH_USERS,
});

export const fetchUsersSuccess = data => ({
  type: constants.FETCH_USERS_SUCCESS,
  data,
});

export const fetchUsersFailure = errors => ({
  type: constants.FETCH_USERS_FAILURE,
  errors,
});
