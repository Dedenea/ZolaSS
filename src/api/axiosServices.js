import axios from 'axios';
import asyncStorage from './asyncStorage';

const axiosservices = axios.create({
  baseURL: 'http://localhost:3000/'
});

// Request interceptor for API calls
axiosservices.interceptors.request.use(
  async config => {
    const token = await asyncStorage.getAccessToken();
    if (token) {
      config.headers['authorization'] = token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
// Response interceptor for API calls
axiosservices.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err);
  }
);

export default axiosservices;
