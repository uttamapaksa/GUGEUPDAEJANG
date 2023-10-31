import axios, {  AxiosInstance } from 'axios';

const BASE_URL = 'https://k9b204.p.ssafy.io:8761';
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

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

export async function postRefreshToken() {
  const headers = {
    'Authorization-refresh': 'Bearer ' + localStorage.getItem('refresh_token'),
  };
  return await publicApi.post('/auth/refresh', null, { headers });
}

privateApi.interceptors.response.use((response) => {
    return response;
  },
  async (error) => {
    const { config } = error;

    if (error.response.status === 403) {
      if (error.response.data.message === '유효하지 않은 토큰') {
        const originRequest = config;
        try {
          const response = await postRefreshToken();
          const newAccessToken = response.headers['authorization'];

          localStorage.setItem('access_token',
            response.headers['authorization']);
          localStorage.setItem('refresh_token',
            response.headers['authorization-refresh']);

          axios.defaults.headers.common.Authorization = 
            `Bearer ${newAccessToken}`;
          originRequest.headers.Authorization = 
            `Bearer ${newAccessToken}`;
            
          return axios(originRequest);
        } 
        catch {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = ("/");
        }
      }
    }
    return Promise.reject(error);
  }
);