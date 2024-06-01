import axiosConfig from "../axios";
export const apiGetADS = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/ads/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetADSById = (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "GET",
          url: `/api/ads/${id}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });