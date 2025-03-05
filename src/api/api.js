import axios from 'axios';
axios.defaults.baseURL = 'https://661ff9213bf790e070ae96ae.mockapi.io';

// Додаємо логування всіх запитів
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  console.error('API Error:', error);
  return Promise.reject(error);
});

export const getCampersApi = async (page = 1) => {
  const response = await axios.get(`/adverts?page=${page}&limit=4`);
  return response.data;
};

export const getAllCampersApi = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};
