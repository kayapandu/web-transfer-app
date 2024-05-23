import axios from "axios";

let urls = {
    development: 'http://localhost:9001/',
    production: 'https://your-production-url.com/'
}

const TIMEOUT = 20000;
const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin':  '*',
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

class ApiService {
    constructor({ baseURL = urls[process.env.NODE_ENV], timeout = TIMEOUT, headers = HEADERS }) {
      const client = axios.create({
        baseURL,
        timeout,
        headers,
      });
  
      client.interceptors.response.use(this.handleSuccess, this.handleError);
      this.client = client;
    }
  
    handleSuccess(response) {
      return response;
    }
  
    handleError(error) {
      return Promise.reject(error);
    }
  
    get(path, option) {
      return this.client.get(path, option).then(response => response.data);
    }
  
    post(path, payload) {
      return this.client.post(path, payload).then(response => response.data);
    }
  
    put(path, payload) {
      return this.client.put(path, payload).then(response => response.data);
    }
  
    patch(path, payload) {
      return this.client.patch(path, payload).then(response => response.data);
    }
  
    delete(path) {
      return this.client.delete(path).then(response => response.data);
    }
  }
  
export default ApiService;
