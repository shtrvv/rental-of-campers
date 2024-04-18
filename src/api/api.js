import axios from 'axios';

axios.defaults.baseURL = 'https://661ff9213bf790e070ae96ae.mockapi.io';

export const getCampersApi = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};
