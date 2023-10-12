import {
  USERDETAILS_FAILED,
  USERDETAILS_LOADED,
  USERDETAILS_LOADING,
} from "../types";

const intialValues = {
  loading: true,
  data: {},
};

export const findAllReducer = (state = intialValues, action) => {
  console.log(action, "sajkdhakjs");
  switch (action.type) {
    case USERDETAILS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USERDETAILS_LOADED:
      return {
        ...state,
        loading: false,
        data: action.data.userDetails,
      };
    case USERDETAILS_FAILED:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};
