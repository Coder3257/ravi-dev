import axios, { AxiosRequestConfig } from 'axios';

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log("intercepting request");
  return config;
});

axios.defaults.headers.common["Accept"] = "application/json";
