import React, { useEffect, useState } from "react";
import { url } from "../redux/config";
import { nomralApiCall } from "../components/helper";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [allUserDetails, setAllUserDetails] = useState([]);
  const [createNewAcoount, setCreateNewAcoount] = useState(false);
  const [error, setError] = useState("");
  const [errorMes, setErrorMes] = useState({
    isUserName: "",
    inValidName: "",
    isPassWord: "",
    inValidPassword: "",
  });
  console.log(loading);
  console.log(error);
  const [createNewError, setCreateNewError] = useState("");

  const [newAccountData, setNewAccountData] = useState({
    name: "",
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    nomralApiCall("get", url, onSuccess, onError);
  }, []);

  const onSuccess = (data) => {
    setLoading(true);
    setAllUserDetails(data);
  };

  const onError = (data) => {
    setLoading(true);
    setError(data);
  };

  const newUserData = {
    userDetails: {
      userName: newAccountData?.userName,
      name: newAccountData?.name,
      password: newAccountData?.password,
      profile_pic: "",
      DOB: "",
      gender: "",
      about_yourself: "",
    },
    musicDetails: {},
    todayDetails: {},
    scheduleDetails: {},
  };

  function postFn() {
    nomralApiCall("post", url, onPostSuccess, onPostError, newUserData);
  }

  const onPostSuccess = (data) => {
    localStorage.setItem("name", data?.data?.userDetails?.name);
    localStorage.setItem("userID", data?.data?.id);
    navigate("/");
  };
  const onPostError = (data) => {
    console.log(data, "ksdjdfkjsad");
  };

  const [userEntryData, setUserEntryData] = useState({
    userName: "",
    password: "",
  });

  function inputDetailsFn(name, value) {
    let data = { [name]: value };
    setUserEntryData({ ...userEntryData, ...data });
  }

  function createInputDeatilsFn(name, value) {
    let data = { [name]: value };
    setNewAccountData({ ...newAccountData, ...data });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userPresent = allUserDetails?.data?.find(
      (item) => item?.userDetails?.userName === userEntryData?.userName
    );
    const isPassWord = allUserDetails?.data?.find(
      (item) => item?.userDetails?.password === userEntryData?.password
    );
    let errorMessage = {
      isUserName: "",
      inValidName: "",
      isPassWord: "",
      inValidPassword: "",
    };
    if (!userEntryData?.userName) {
      errorMessage.isUserName = "Please Enter User Name";
    } else if (!userEntryData?.password) {
      errorMessage.isPassWord = "Please Enter Password";
    } else if (userPresent && !isPassWord) {
      errorMessage.inValidPassword = "Invalid Password";
    } else if (!userPresent) {
      errorMessage.inValidName = "Invalid User Name";
    }

    setErrorMes(errorMessage);

    if (userPresent && isPassWord) {
      localStorage.setItem("name", userPresent?.userDetails?.name);
      localStorage.setItem("userID", userPresent?.id);
      navigate("/");
    }
  }

  function handleCreateSubmit(e) {
    e.preventDefault();
    const userPresent = allUserDetails?.data?.find(
      (item) => item?.userDetails?.userName === newAccountData?.userName
    );
    console.log(userPresent, "jasdhsfsdfja");
    if (!newAccountData?.name) {
      setCreateNewError("Please Enter Name");
    } else if (!newAccountData?.userName) {
      setCreateNewError("Please Enter User Name");
    } else if (!newAccountData?.password) {
      setCreateNewError("Please Enter Password");
    } else if (userPresent) {
      setCreateNewError("User Name is already present");
    } else {
      postFn();
    }
  }
  return (
    <div className="loginPage_conatiner ">
      <div className="row gx-0">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center h_full h_md_50 px-5">
            <div
              className="d-flex justify-content-center align-items-center black_color border_radius_50per loginPage_innerText"
              style={{ height: "300px", width: "300px" }}
            >
              <span className="fs_26 fw_500">Welcome to Your App</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center h_full h_md_50">
            <div className="w-100 loding_conatiner">
              {createNewAcoount ? (
                <>
                  <form onSubmit={(e) => handleCreateSubmit(e)}>
                    <div>
                      <label className="fs_20">Name</label>
                      <div>
                        <input
                          className={` ${"border_none"} border_radius outline_none  p-1 w-100 ps-2 fw_500`}
                          name="name"
                          onChange={(e) => {
                            createInputDeatilsFn(e.target.name, e.target.value);
                            setCreateNewError("");
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="fs_20">User Name</label>
                      <div>
                        <input
                          className={` ${"border_none"} border_radius outline_none  p-1 w-100 ps-2 fw_500`}
                          name="userName"
                          onChange={(e) => {
                            createInputDeatilsFn(e.target.name, e.target.value);
                            setCreateNewError("");
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="fs_20">Password</label>
                      <div>
                        <input
                          className={`${"border_none"} border_radius outline_none  p-1 w-100 ps-2 fw_500`}
                          name="password"
                          onChange={(e) => {
                            createInputDeatilsFn(e.target.name, e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    {createNewError && (
                      <div className="mt-2">
                        <span className="ps-1 pt-1 red_color">
                          {createNewError}
                        </span>
                      </div>
                    )}
                    <div className="d-flex justify-content-center mt-4">
                      <button
                        type="submit"
                        className="fs_16 fw_500 text-center border_none white_bg border_radius black_color "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                      <label className="fs_20">User Name</label>
                      <div>
                        <input
                          className={` ${
                            errorMes.isUserName || errorMes.inValidName
                              ? "error_border_dark"
                              : "border_none"
                          } border_radius outline_none  p-1 w-100 ps-2 fw_500`}
                          name="userName"
                          onChange={(e) => {
                            inputDetailsFn(e.target.name, e.target.value);
                            setErrorMes((prev) => ({
                              ...prev,
                              isUserName: "",
                              inValidName: "",
                            }));
                          }}
                        />
                      </div>
                      {(errorMes.isUserName || errorMes.inValidName) && (
                        <div>
                          {" "}
                          <span className="ps-1 pt-1 red_color">
                            {" "}
                            {errorMes.isUserName || errorMes.inValidName}
                          </span>{" "}
                        </div>
                      )}
                    </div>

                    <div className="mt-3">
                      <label className="fs_20">Password</label>
                      <div>
                        <input
                          className={`${
                            errorMes.isPassWord || errorMes.inValidPassword
                              ? "error_border_dark"
                              : "border_none"
                          } border_radius outline_none  p-1 w-100 ps-2 fw_500`}
                          name="password"
                          onChange={(e) => {
                            inputDetailsFn(e.target.name, e.target.value);
                            setErrorMes((prev) => ({
                              ...prev,
                              isPassWord: "",
                              inValidPassword: "",
                            }));
                          }}
                        />
                      </div>
                      {(errorMes.isPassWord || errorMes.inValidPassword) && (
                        <div>
                          {" "}
                          <span className="ps-1 pt-1 red_color">
                            {" "}
                            {errorMes.isPassWord || errorMes.inValidPassword}
                          </span>{" "}
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <button
                        type="submit"
                        className="fs_16 fw_500 text-center border_none white_bg border_radius black_color "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              )}
              <div className="text-end mt-4">
                <button
                  className="fs_16 fw_500 white_color background_none border_none"
                  type="button"
                  onClick={() => {
                    setCreateNewAcoount(!createNewAcoount);
                  }}
                >
                  {createNewAcoount ? "Login In ?" : "Create New Account ?"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
