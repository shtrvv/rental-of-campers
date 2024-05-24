import axios from 'axios';
axios.defaults.baseURL = 'https://661ff9213bf790e070ae96ae.mockapi.io';

export const getCampersApi = async (page = 1) => {
  const response = await axios.get(`/adverts?page=${page}&limit=4`);
  return response.data;
};

export const getAllCampersApi = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};
