import axiosConfig from "../axios";
export const apiGetMatches = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/matches/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetMatchesById = (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "GET",
          url: `/api/matches/${id}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });