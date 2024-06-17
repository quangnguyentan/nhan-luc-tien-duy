import axiosConfig from "../axios";
export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/post/",
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
          url: `/post/${id}`,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
    export const apiPutPost = (id, data) =>
      new Promise(async (resolve, reject) => {
        try {
          const response = await axiosConfig({
            method: "PUT",
            url: `/post/${id}`,
            data
          });
          resolve(response);
        } catch (error) {
          reject(error);
        }
      });