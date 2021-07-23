import axios from 'utils/axios';

const prefix = '/users';

export const fetchUsersApi = () => axios.get(prefix);
