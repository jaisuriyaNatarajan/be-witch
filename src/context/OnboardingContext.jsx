import { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export const useOnboarding = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    legalName: "",
    dob: "",
    email: "",
    location: "",
    // more if needed
  });

  const [formData, setFormData] = useState({
    artist: "",
    profilePicture: "",
    socialProof: "",
    about: "",
    onboardingCompleted: false,
  });

  const updateSignupData = (newData) => {
    setSignupData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const updateFormData = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{
        signupData,
        updateSignupData,
        formData,
        updateFormData,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
