import axios from 'axios';

export function login(userData) {
  console.log(userData)
  return axios.post('/auth/login', userData).then((res) => res.data);
}

export function register(userData) {
  return axios.post('/auth/register', userData).then((res) => res.data);
}

export function getMe() {
  return axios.get('/auth/me').then((res) => res.data);
}

export function logout() {
  return axios.post('/auth/logout').then((res) => res.data);
}
