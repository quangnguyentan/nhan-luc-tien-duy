import axiosConfig from "../axios";
export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/api/post/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetPostsById = (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axiosConfig({
          method: "GET",
          url: `/api/post/${id}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });