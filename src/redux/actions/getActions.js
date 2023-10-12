import { FIND_ALL_USER, FIND_ONE_USER } from "../types";

export const findAllUser = (onSuccess, onError) => ({
  type: FIND_ALL_USER,
  //   data: data,
  onSuccess,
  onError,
});

export const findOneUser = (data, onSuccess, onError) => ({
  type: FIND_ONE_USER,
  data: data,
  onSuccess,
  onError,
});
