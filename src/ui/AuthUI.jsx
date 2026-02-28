import { useState } from "react";
import bgImage from "../assets/bgImage.webp";
import logo from "../assets/logo.svg";
const AuthUI = () => {
  const [mode, setMode] = useState("Login");

  const handleMode = (e) => {
    setMode(e.target.innerText);
  };

  //this will be handled in auth page container
  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className=" min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-2.5">
        <img src={logo} alt="insureAI" />
      </div>
      <div className="flex justify-around items-start pt-20 w-full gap-20">
        <div id="intro" className="flex flex-col gap-3 pt-30">
          <h1 className="text-primary-600 text-page-title break-after-all">
            Streamline Your Health Insurance with AI
          </h1>
          <ul>
            <li className="text-gray-700 text-body">
              ✔️Get Instant answers about your health plan
            </li>
            <li className="text-gray-700 text-body">
              ✔️Easily manage your claims
            </li>
            <li className="text-gray-700 text-body">
              ✔️Find in-network or out-network doctors quickly
            </li>
          </ul>
        </div>
        <div
          id="auth-form"
          className=" w-90 bg-white rounded-default shadow-level-2 p-7"
        >
          <div
            id="login-signup"
            className=" flex items-center justify-around mb-4"
          >
            <button
              onClick={(e) => handleMode(e)}
              className={
                mode === "Login"
                  ? "text-primary-500 border-b-2 border-primary-100 cursor-pointer"
                  : "text-gray-900 cursor-pointer hover:brightness-105"
              }
            >
              Login
            </button>
            <button
              className={
                mode === "SignUp"
                  ? "text-primary-500 border-b-2 border-primary-100 cursor-pointer"
                  : "text-gray-900 cursor-pointer hover:brightness-105"
              }
              onClick={(e) => handleMode(e)}
            >
              SignUp
            </button>
          </div>
          <form
            className="transition-all duration-300"
            onSubmit={(e) => handleSumbit(e)}
          >
            <div id="input-field">
              {mode === "SignUp" && (
                <>
                  <div id="fName" className="flex flex-col mb-3">
                    <label
                      htmlFor="fName"
                      className="text-gray-900 text-caption mb-0.5 font-semibold"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="fName"
                      name="fName"
                      placeholder="🔤Enter Your Full Name"
                      className="border border-gray-200 rounded-default h-[7vmin] p-2 focus:placeholder-transparent transition"
                    />
                  </div>
                  <div id="crn" className="flex flex-col mb-3">
                    <label
                      htmlFor="crn"
                      className="text-gray-900 text-caption mb-0.5 font-semibold"
                    >
                      CRN
                    </label>
                    <input
                      required
                      type="number"
                      id="crn"
                      name="crn"
                      placeholder="🔢Enter Your CRN"
                      className="border border-gray-200 rounded-default h-[7vmin] p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:placeholder-transparent transition"
                    />
                  </div>
                </>
              )}
              <div id="email" className="flex flex-col mb-3">
                <label
                  htmlFor="email"
                  className="text-gray-900 text-caption mb-0.5 font-semibold"
                >
                  Email
                </label>
                <input
                  required
                  type="text"
                  id="email"
                  name="email"
                  placeholder="✉️Enter Your email"
                  className="border border-gray-200 rounded-default h-[7vmin] p-2 focus:placeholder-transparent transition"
                />
              </div>
              <div id="password" className="flex flex-col mb-3">
                <label
                  htmlFor="password"
                  className="text-gray-900 text-caption mb-0.5 font-semibold focus:placeholder-transparent transition"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="pwd"
                  name="pwd"
                  placeholder="🔒********"
                  className="border border-gray-200 rounded-default h-[7vmin] p-2"
                />
              </div>
              {mode !== "SignUp" && (
                <div className="text-right mb-7 cursor-pointer">
                  <a className="text-primary-500 text-caption mb-3 ">
                    Forgot password?
                  </a>
                </div>
              )}
            </div>
            <button className="w-full bg-primary-500 rounded-default h-[8vmin] cursor-pointer hover:brightness-110 text-primary-100">
              {mode === "Login" ? "Login" : "SignUp"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthUI;
