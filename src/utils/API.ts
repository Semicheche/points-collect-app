import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8000/points',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  },
  proxy: {
	  host: '127.0.0.1',
	  port: 3000
  }
});

export default api


