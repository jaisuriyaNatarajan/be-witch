import { SignupForm } from "../../components/signup/SignupForm";
import { TwoColumnLayout } from "../TwoColumnLayout";
import { useLocation } from "react-router-dom";
import OtpVerification from "../../components/signup/OtpVerification";
import Loginpage from "../../components/signup/Loginpage";

const SignupPage = () => {
  const location = useLocation();
  
  const renderComponent = () => {
    const componentMap = {
      "/signup/otp-verification": <OtpVerification />,
      "/login": <Loginpage/>,
    };

    return componentMap[location.pathname] || <SignupForm />;
  };

  return (
    <>
      <TwoColumnLayout>{renderComponent()}</TwoColumnLayout>
    </>
  );
};

export default SignupPage;
