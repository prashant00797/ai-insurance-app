import AuthUI from "../ui/AuthUI";
import { useState } from "react";
import checkValidation from "../utility/validate";
import { logInUserService, signUpUserService } from "../service/firebaseApi";
const AuthPage = () => {
  const [mode, setMode] = useState("Login");
  const [formData, setFormData] = useState({
    fname: "",
    crn: "",
    email: "",
    pwd: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleMode = (newMode) => {
    setMode(newMode);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //
  const handleSignup = async ({ email, pwd, fname }) => {
    try {
      setIsLoading(true);
      await signUpUserService(email, pwd, fname);
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  //
  const handleLogin = async ({ email, pwd }) => {
    try {
      setIsLoading(true);
      await logInUserService(email, pwd);
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const message = checkValidation(formData, mode);
    setErrorMessage(message);
    if (message) return;

    if (mode === "SignUp") {
      handleSignup(formData);
    } else {
      handleLogin(formData);
    }
  };

  return (
    <>
      <AuthUI
        mode={mode}
        handleMode={handleMode}
        handleSumbit={handleSumbit}
        handleOnChange={handleOnChange}
        formData={formData}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </>
  );
};

export default AuthPage;
