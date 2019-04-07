import axios from 'axios';
import { API_URL } from '../config';

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: API_URL
  });

  return instance;
};

export default axiosInstance;
