/**
 *
 * Asynchronously loads the component for ToDoPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
