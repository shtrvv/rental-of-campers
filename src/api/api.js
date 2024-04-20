import axios from 'axios';
axios.defaults.baseURL = 'https://661ff9213bf790e070ae96ae.mockapi.io';

export const getCampersApi = async page => {
  const response = await axios.get(`/adverts?page=${page}&limit=4`);
  return response.data;
};
