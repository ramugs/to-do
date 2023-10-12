import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout";

const PrivateRoute = () => {
  return localStorage.getItem("userID") ? (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  ) : (
    <>
      <Navigate to={"/login-page"} />
    </>
  );
};

export default PrivateRoute;
