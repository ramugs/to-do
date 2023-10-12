import React from "react";
import { nomralApiCall } from "../components/helper";

const HomePage = () => {
  const url = "https://651005ba3ce5d181df5cd918.mockapi.io/to-do";
  const data = {
    userDetails: {
      name: "Krishna",
      userName: "Krishnags",
      password: "krishna",
      dob: "",
      profilePic: "",
    },
    musicDetails: {},
    todayDetails: {},
    scheduleDetails: {},
  };

  function postFn() {
    nomralApiCall("post", url, onSuccess, onError, data);
  }

  const onSuccess = (data) => {
    console.log(data, "ksdjdfkjsad");
  };
  const onError = (data) => {
    console.log(data, "ksdjdfkjsad");
  };

  return (
    <div>
      <button type="button" onClick={() => postFn()}>
        post
      </button>
    </div>
  );
};

export default HomePage;
