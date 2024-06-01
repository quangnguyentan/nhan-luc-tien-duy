import axios from "axios";
const instance = axios.create({
  // baseURL: 'https://sovo-server-1.onrender.com/',
  baseURL: 'http://localhost:8080/',

});
instance.interceptors.request.use(
  function (config) {
    const token =
      window.localStorage.getItem("dauphong") &&
      JSON.parse(window.localStorage.getItem("dauphong"))?.token.slice(
        1,
        -1
      );

    config.headers = { authorization: `Bearer ${token}` };
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response;
  }
);
export default instance;
