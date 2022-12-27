import axios from 'axios';

const shazamApi = axios.create({
  baseURL: 'https://shazam.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
  },
  params: {
    locale: 'en-US',
  },
});

export const searchSongs = async (params = {}) => {
  const response = await shazamApi.get('search', { params });

  return response.data;
};

export const getCharts = async ({ pageSize = 18, startFrom = 0 } = {}) => {
  const response = await shazamApi.get('charts/track', {
    params: { pageSize, startFrom },
  });
  return response.data.tracks;
};
