import { api } from "./api";

export const findAllUserApi = (params) => {
  return api.get(
    `/to-do`,
    JSON.stringify(params)
    // , {
    //   headers: {
    //     "x-access-token": localStorage.getItem("accessToken"),
    //     "Content-Type": "application/json",
    //   },
    // }
  );
};

export const findOneUserApi = (data, params) => {
  return api.get(`/to-do/${data.id}`, JSON.stringify(params));
};
