import axios from 'axios';

axios.defaults.url = 'https://661ff9213bf790e070ae96ae.mockapi.io';

export const getCampersApi = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};

export const getCamperApi = async id => {
  const response = await axios.get(`/adverts/${id}`);
  return response.data;
};
