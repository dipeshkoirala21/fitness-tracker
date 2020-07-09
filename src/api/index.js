import axios from 'axios';


export const BASE_URL = 'http://localhost:5200/api';
export const IMAGE_URL = 'http://localhost:5200/api';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
export const loginPost = data => api.post('user/login', data);
export const logoutGet = () => api.get('user/logout');
