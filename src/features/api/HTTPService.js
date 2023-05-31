import axios from 'axios';
import {baseUrl} from "../constants/baseUrl.js";

const BASE_API_URL = baseUrl;
export const AUTH_TOKEN = 'AUTH_TOKEN';

class HTTPService {
  token;

  constructor(url) {
    axios.defaults.baseURL = url;
    axios.defaults.headers.common.Accept = 'application/json';
    this.token = window.localStorage.getItem(AUTH_TOKEN) || '';

    if (this.token) {
      this.setAuthHeader(this.token);
    }
  }

  get(url, config) {
    return axios
      .get(url, config)
      .then((res) => this.handleSuccess(res))
      .catch(this.handleError);
  }

  post(url, data, config) {
    return axios
      .post(url, data, config)
      .then((res) => this.handleSuccess(res))
      .catch(this.handleError);
  }

  put(url, data, config) {
    return axios
      .put(url, data, config)
      .then((res) => this.handleSuccess(res))
      .catch(this.handleError);
  }

  patch(url, data, config) {
    return axios
      .patch(url, data, config)
      .then((res) => this.handleSuccess(res))
      .catch(this.handleError);
  }

  delete(url, data, config) {
    return axios
      .delete(url, config)
      .then((res) => this.handleSuccess(res))
      .catch(this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  setAuthHeader(header) {
    axios.defaults.headers.common.Authorization = `Bearer ${header}`;
  }

  handleError(error) {
    const payload = error.response ? error.response : error?.request?.data;

    if (error.response?.status === 403) {
      localStorage.removeItem(AUTH_TOKEN);
      window.location.href = '/login';
    }

    throw payload;
  }
}

export default new HTTPService(BASE_API_URL);
