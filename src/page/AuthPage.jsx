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
      let response = await signUpUserService(email, pwd, fname);
      console.log(response, "signup");
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error.message);
    }
  };

  //
  const handleLogin = async ({ email, pwd }) => {
    try {
      let response = await logInUserService(email, pwd);
      console.log(response, "login");
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
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
      />
    </>
  );
};

export default AuthPage;
