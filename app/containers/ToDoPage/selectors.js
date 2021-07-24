import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the toDoPage state domain
 */

const selectToDoPageDomain = state => state.toDoPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ToDoPage
 */

const makeSelectToDoPage = () =>
  createSelector(
    selectToDoPageDomain,
    substate => substate,
  );

export default makeSelectToDoPage;
export { selectToDoPageDomain };
