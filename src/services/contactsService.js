import axios from 'axios';

export function getContacts() {
  return axios.get('/contacts').then((res) => res.data);
}
