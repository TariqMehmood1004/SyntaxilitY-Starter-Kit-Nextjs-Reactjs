import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "/api",
    withCredentials: false,
});


// Global error toast handler
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error(`AXIOS ERROR: ${error.message}`);
      // Don’t use APIResponseHandler here, just reject
      return Promise.reject(new Error(`Service is unreachable. Please wait a few minutes and try again.`));
    }
    return Promise.reject(`Service is unreachable. Please wait a few minutes and try again.`);
  }
);

export default axiosInstance;