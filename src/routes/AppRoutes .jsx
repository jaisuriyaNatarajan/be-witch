import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
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
import UploadProfilePicture from "../components/onboarding/UploadProfilePicture "; // Removed extra space
import ProfileSetupLayout from "../layout/ProfileSetupLayout";
import SocialProof from "../components/onboarding/SocialProof";
import AboutYou from "../components/onboarding/AboutYou";
import ProfileSetup from "../components/webpages/ProfileSetup";
import ServicePhotos from "../components/webpages/ServicePhotos";
import UploadPortfolio from "../components/webpages/UploadPortfolio";
import ServiceTitleForm from "../components/webpages/ServiceTitleForm"; // Fixed capitalization
import HighlightsSelector from "../components/webpages/HighlightsSelector";
import BasePrice from "../components/webpages/BasePrice";
import Discounts from "../components/webpages/Discounts"; // Fixed capitalization
import AdditionalCharges from "../components/webpages/AdditionalCharges"; // Fixed typo

const AppRoutes = () => {
  const [hide, setHide] = useState(true);
  return (
    <Routes>
      <Route index element={<LoginLayout />} />
      <Route path="/login" element={<LoginLayout />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/signup/otp-verification" element={<SignupPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route
        path="/onboarding/upload-photo"
        element={
          <ProfileSetupLayout>
            <UploadProfilePicture />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/onboarding/social-proof"
        element={
          <ProfileSetupLayout>
            <SocialProof />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/onboarding/about-you"
        element={
          <ProfileSetupLayout>
            <AboutYou />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/profile-setup"
        element={
          <ProfileSetupLayout hide={hide}>
            <ProfileSetup setHide={setHide} />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/servicePhotos"
        element={
          <ProfileSetupLayout>
            <ServicePhotos />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/uploadPortfolio"
        element={
          <ProfileSetupLayout>
            <UploadPortfolio />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/serviceTitle"
        element={
          <ProfileSetupLayout>
            <ServiceTitleForm />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/highlightsSelector"
        element={
          <ProfileSetupLayout>
            <HighlightsSelector />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/basePrice"
        element={
          <ProfileSetupLayout>
            <BasePrice />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/discounts"
        element={
          <ProfileSetupLayout>
            <Discounts />
          </ProfileSetupLayout>
        }
      />
      <Route
        path="/web/additonalCharges"
        element={
          <ProfileSetupLayout>
            <AdditionalCharges />
          </ProfileSetupLayout>
        }
      />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />{" "}
        {/* Fixed capitalization in path */}
        <Route path="/discover" element={<Discover />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="overview" element={<Overview />} />
          <Route path="about" element={<About />} />{" "}
          {/* Fixed capitalization in path */}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
