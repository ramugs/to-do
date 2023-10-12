import React, { useEffect } from "react";
import DefaultImage from "../assests/images/defaultImage.png";
import { useDispatch, useSelector } from "react-redux";
import { findOneUser } from "../redux/actions/getActions";

const SettingPage = () => {
  const disptach = useDispatch();
  const reducers = useSelector((state) => state.findAllReducer);
  console.log(reducers, "sjhdsakjda");

  useEffect(() => {
    disptach(findOneUser({ id: "1" }, onSuccess, onError));
  }, []);

  const onSuccess = (data) => {
    console.log(data, "asddsd");
  };
  const onError = (data) => {
    console.log(data, "asddsd");
  };

  console.log("ksjhdkjas");

  return (
    <div className="row">
      <div className="col-4">
        <div className="d-flex justify-content-center mt-5 ">
          <img
            src={DefaultImage}
            width="200px"
            height="200px"
            className="border_radius_50per"
          />
        </div>
      </div>
      <div className="col-8">sds</div>
    </div>
  );
};

export default SettingPage;
