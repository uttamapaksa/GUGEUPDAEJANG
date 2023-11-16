import axios, {  AxiosInstance } from 'axios';

const BASE_URL = 'https://k9b204.p.ssafy.io:8443/api';
axios.defaults.withCredentials = true;

export const publicApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

export const UploadFileApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

export async function postRefreshToken() {
  const info = {
    'refreshToken' : localStorage.getItem('refresh_token'),
  };
  return await publicApi.post('/auth/refresh', info);
}

privateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config } = error;
    const originRequest = config;
    if (error.message === "Network Error") {
        try {
          const response = await postRefreshToken();
          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;
  
          localStorage.setItem('access_token',newAccessToken);
          localStorage.setItem('refresh_token',newRefreshToken);
  
          axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          originRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          return axios(originRequest);
        } catch {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = ("/");
      }
    }
    return Promise.reject(error);
  }
);