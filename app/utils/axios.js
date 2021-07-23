const axios = require('axios');

export default axios.create({
  baseURL: 'https://60f827fb9cdca00017455266.mockapi.io/api/v1',
  timeout: 5000,
});
