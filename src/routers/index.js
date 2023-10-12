import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../modules/homePage";
import LoginPage from "../modules/loginPage";
import MusicPage from "../modules/musicPage";
import TodayPage from "../modules/todayPage";
import SchedulePage from "../modules/schedulePage";
import ProtectedRoute from "./protectedRoute";
import PrivateRoute from "./privateRoute";
import SettingPage from "../modules/settingPage";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/login-page" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/music-page" element={<MusicPage />} />
            <Route path="/today-page" element={<TodayPage />} />
            <Route path="/schedule-page" element={<SchedulePage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Index;
