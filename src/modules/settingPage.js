import React, { useEffect } from "react";
import DefaultImage from "../assests/images/defaultImage.png";
import { useDispatch, useSelector } from "react-redux";
import { findOneUser } from "../redux/actions/getActions";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      userName: "",
      name: "",
      profile_pic: "",
      DOB: "",
      gender: "",
      password: "",
      about_yourself: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string().required("required"),
      name: Yup.string().required("required"),
      profile_pic: Yup.string().required("required"),
      DOB: Yup.string().required("required"),
      gender: Yup.string().required("required"),
      password: Yup.string().required("required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log("ksjhdkjas");

  return (
    <div className="row">
      <div className="col-4">
        <div className="d-flex justify-content-center mt-5 ">
          <img
            alt="image"
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
