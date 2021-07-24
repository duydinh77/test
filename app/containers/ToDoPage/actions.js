/*
 *
 * ToDoPage actions
 *
 */

import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
} from './constants';

export const fetchToDos = () => ({
  type: FETCH_TODO,
});

export const fetchToDosSuccess = data => ({
  type: FETCH_TODO_SUCCESS,
  data,
});

export const fetchToDosFailure = error => ({
  type: FETCH_TODO_FAILURE,
  error,
});
