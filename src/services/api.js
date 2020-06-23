import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5454/',
});

export default api;
