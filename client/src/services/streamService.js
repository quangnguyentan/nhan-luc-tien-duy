import axiosConfig from "../axios";
export const apiGetStream = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/stream/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetStreamById = (idMatches) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "GET",
          url: `/stream/${idMatches}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });