import logo from "../assets/logo.svg";
import { AuthErrorMessage } from "../module/ErrorBoundary";
import {
  AuthTagLinesConfig,
  FormConfig,
  ToggleLoginSignUpConfig,
} from "../constant/config";
import {
  Login,
  LoginShimmerText,
  Signup,
  SignupShimmerText,
} from "../constant/label";
import Footer from "./Footer";

const AuthUI = ({
  mode,
  handleMode,
  handleSumbit,
  handleOnChange,
  formData,
  errorMessage,
  isLoading,
  handleGuestLogin,
}) => {
  const FilterFormFields = FormConfig.filter((field) => {
    if (field.flag === "Login-SignUp") return true;
    if (field.flag === "SignUp" && mode === "SignUp") return true;
    return false;
  });

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${"/bgImage.webp"})` }}
    >
      <div className="pl-4 pt-4">
        <img src={logo} alt="insureAI" />
      </div>

      {/* Center Section */}
      <div className="flex flex-1 flex-col justify-center items-center lg:flex-row gap-10 px-6">
        {/* Intro */}
        <div id="intro" className="flex flex-col gap-3 max-w-lg">
          <h1 className="text-primary-600 text-page-title text-center lg:text-left">
            {AuthTagLinesConfig.title}
          </h1>

          <ul>
            {AuthTagLinesConfig.taglines.map((li, idx) => {
              return (
                <li key={idx} className="text-gray-700 text-body">
                  {li}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Auth Card */}
        <div className="w-full max-w-md bg-white rounded-default shadow-level-2 p-7">
          {/* Toggle */}
          <div className="flex items-center justify-around mb-4">
            {ToggleLoginSignUpConfig.map((item) => {
              return (
                <button
                  key={item.mode}
                  onClick={() => handleMode(item.mode)}
                  className={
                    mode === item.mode
                      ? "text-primary-500 border-b-2 border-primary-100 cursor-pointer"
                      : "text-gray-900 cursor-pointer hover:brightness-105"
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Form */}
          <form onSubmit={handleSumbit}>
            <div id="input-field">
              {FilterFormFields.map((field) => {
                return (
                  <div key={field.id} className="flex flex-col mb-3">
                    <label
                      htmlFor={field.id}
                      className="text-gray-900 text-caption mb-0.5 font-semibold"
                    >
                      {field.label}
                    </label>

                    <input
                      required={field.required}
                      autoComplete="off"
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`border border-gray-200 rounded-default h-11 p-2 focus:placeholder-transparent ${
                        field.type === "number" &&
                        "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      }`}
                      onChange={handleOnChange}
                      value={formData[field.name]}
                    />
                  </div>
                );
              })}
              {errorMessage && <AuthErrorMessage errorMessage={errorMessage} />}

              {isLoading && (
                <div className="mb-7">
                  <p className="text-primary-600 animate-pulse">
                    {mode === Login ? LoginShimmerText : SignupShimmerText}
                  </p>
                </div>
              )}
            </div>

            <button className="w-full bg-primary-500 rounded-default h-11 cursor-pointer hover:brightness-110 text-primary-100">
              {mode === Login ? Login : Signup}
            </button>
            {mode === Login && (
              <button
                onClick={handleGuestLogin}
                className="w-full bg-primary-100 rounded-default h-11 cursor-pointer hover:brightness-110 text-primary-500 mt-2"
              >
                Guest Login
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthUI;
