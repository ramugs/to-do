import axios from "axios";

export const nomralApiCall = (method, url, onSuccess, setError, postData) => {
  if (method === "get") {
    axios
      .get(url)
      .then((res) => {
        onSuccess(res);
      })
      .catch((error) => {
        setError(error);
      });
  } else if (method === "post") {
    axios
      .post(url, postData)
      .then((res) => {
        onSuccess(res);
      })
      .catch((error) => {
        setError(error);
      });
  }
};
