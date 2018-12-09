import axios from 'axios';

const BASE_URL = 'http://localhost:9000/';

export {
  BASE_URL,
};

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
