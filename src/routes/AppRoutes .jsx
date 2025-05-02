import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import Discover from "../pages/Discover";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import MainLayout from "../layout/MainLayout";
import Overview from "../pages/Overview";
import About from "../pages/About";
import LoginLayout from "../layout/login/LoginLayout";
import SignupPage from "../layout/login/LoginLayout";
import Onboarding from "../components/signup/Onboarding";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" index element={<LoginLayout />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/signup/otp-verification" element={<SignupPage />} />
      <Route path="/onboarding" element={<Onboarding />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Bookings" element={<Bookings />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Services" element={<Services />} />

        {/* Nest Overview under Profile */}
        <Route path="/profile" element={<Profile />}>
          <Route path="overview" element={<Overview />} />
          <Route path="About" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
