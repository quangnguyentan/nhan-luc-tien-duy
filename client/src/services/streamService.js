import axiosConfig from "../axios";
export const apiGetStream = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/stream/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetStreamById = (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "GET",
          url: `/api/stream/${id}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });