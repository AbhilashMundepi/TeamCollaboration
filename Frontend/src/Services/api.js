import axios from 'axios';

const API = axios.create({
  baseURL: 'https://teamcollaboration-1.onrender.com/',
});

export default API;
