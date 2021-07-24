import axios from 'utils/axios';

const endPoint = '/tasks';

export const fetchToDoApi = () => axios.get(endPoint);
