import AuthUI from "../ui/AuthUI";
import { useState } from "react";
import checkValidation from "../utility/validate";
import { logInUserService, signUpUserService } from "../service/firebaseApi";
import { USER_DEFAULT_EMAIL, USER_DEFAULT_PWD } from "../constant/common";
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
    setErrorMessage("");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleSumbit = async (e) => {
    e.preventDefault();
    const message = checkValidation(formData, mode);

    if (message) {
      setErrorMessage(message);
      return;
    }

    setErrorMessage("");

    if (mode === "SignUp") {
      await handleSignup(formData);
    } else {
      await handleLogin(formData);
    }
  };

  const handleGuestLogin = () => {
    setFormData((prev) => ({
      ...prev,
      email: USER_DEFAULT_EMAIL,
      pwd: USER_DEFAULT_PWD,
    }));
  };

  return (
    <AuthUI
      mode={mode}
      handleMode={handleMode}
      handleSumbit={handleSumbit}
      handleOnChange={handleOnChange}
      formData={formData}
      errorMessage={errorMessage}
      isLoading={isLoading}
      handleGuestLogin={handleGuestLogin}
    />
  );
};

export default AuthPage;
