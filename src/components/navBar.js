import React, { useEffect, useState } from "react";
import "./components.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.clear();
    window.location.reload();
  };

  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg  light_black_bg navbar_container">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            {userName}
          </a>

          <div className="d-flex align-items-center gap-4 me-5">
            <span>
              <i className="ri-music-2-fill" />
            </span>
            <span onClick={() => navigate("/setting")}>
              <i className="ri-settings-4-fill" />
            </span>
            <span className="" onClick={() => logoutFn()}>
              <i className="ri-logout-box-r-fill" />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
