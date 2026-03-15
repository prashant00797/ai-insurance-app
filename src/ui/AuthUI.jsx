import logo from "../assets/logo.svg";
import { AuthErrorMessage } from "../module/ErrorBoundary";
import {
  AuthTagLines,
  FormConfig,
  Login,
  LoginShimmerText,
  Signup,
  SignupShimmerText,
  ToggleLoginSignUpConfig,
} from "../constant/common";
const AuthUI = ({
  mode,
  handleMode,
  handleSumbit,
  handleOnChange,
  formData,
  errorMessage,
  isLoading,
}) => {
  return (
    <div
      className=" min-h-screen bg-cover bg-center pb-2"
      style={{ backgroundImage: `url(${"/bgImage.webp"})` }}
    >
      <div className="pl-4 mb-6">
        <img src={logo} alt="insureAI" />
      </div>
      <div className="flex flex-col justify-center items-center  lg:flex-row lg:justify-center gap-10 min-h-[90vh]">
        <div id="intro" className="flex flex-col gap-3 px-10">
          <h1 className="text-primary-600 text-page-title text-center break-after-all">
            {AuthTagLines.title}
          </h1>
          <ul>
            {AuthTagLines.taglines.map((li, idx) => {
              return (
                <li key={idx} className="text-gray-700 text-body">
                  {li}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" w-90 lg:w-[30vmax] h-full bg-white rounded-default shadow-level-2 p-7">
          <div className=" flex items-center justify-around mb-4">
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
          <form onSubmit={handleSumbit}>
            <div id="input-field">
              {FormConfig.map((field) => {
                if (mode === Login && field.flag === Signup) return null;
                return (
                  <div key={field.id} className="flex flex-col mb-3">
                    <label
                      htmlFor={field.id}
                      className="text-gray-900 text-caption mb-0.5 font-semibold"
                    >
                      {field.label}
                    </label>
                    <input
                      required
                      autoComplete="off"
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      className={`border border-gray-200 rounded-default h-[7vmin] p-2 focus:placeholder-transparent ${field.type === "number" && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"} `}
                      onChange={(e) => handleOnChange(e)}
                      value={formData[field.name]}
                    />
                  </div>
                );
              })}
              {errorMessage && <AuthErrorMessage errorMessage={errorMessage} />}
              {isLoading && (
                <div className=" mb-7">
                  <p className="text-primary-600 animate-pulse">
                    {mode === Login ? LoginShimmerText : SignupShimmerText}
                  </p>
                </div>
              )}
            </div>
            <button className="w-full bg-primary-500 rounded-default h-[8vmin] cursor-pointer hover:brightness-110 text-primary-100">
              {mode === Login ? Login : Signup}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthUI;
