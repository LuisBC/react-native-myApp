import axios from 'axios';
import { API_URL_DEV, API_URL_PROD } from 'react-native-dotenv';

const instance = axios.create({
  // baseURL: API_URL_DEV,
  baseURL: API_URL_PROD,
});

module.exports = {
  instance,
};
