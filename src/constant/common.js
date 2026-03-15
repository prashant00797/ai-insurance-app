export const BASE_URL = "https://69a4344a611ecf5bfc246786.mockapi.io/iai/v1";
export const BASE_URL_CLAIMS =
  "https://69a4344a611ecf5bfc246786.mockapi.io/iai/v1/claims-data";
export const BASE_URL_PROVIDERS =
  "https://69a4344a611ecf5bfc246786.mockapi.io/iai/v1/providers-data";

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const FIREBASE_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

export const AuthTagLines = {
  title: "Streamline Your Health Insurance with AI",
  taglines: [
    "✔️Get Instant answers about your health plan",
    "✔️Easily manage your claims",
    "✔️Find in-network or out-network doctors quickly",
  ],
};

export const ToggleLoginSignUpConfig = [
  {
    mode: "Login",
    label: "Login",
  },
  {
    mode: "SignUp",
    label: "SignUp",
  },
];

export const FormConfig = [
  {
    flag: "SignUp",
    id: "fname",
    name: "fname",
    placeholder: "🔤Enter Your Full Name",
    label: "Full Name",
    type: "text",
  },
  {
    flag: "SignUp",
    id: "crn",
    name: "crn",
    placeholder: "🔢Enter Your CRN",
    label: "CRN",
    type: "number",
  },
  {
    flag: "Login-SignUp",
    id: "email",
    name: "email",
    placeholder: "✉️Enter Your email",
    label: "Email",
    type: "text",
  },
  {
    flag: "Login-SignUp",
    id: "pwd",
    name: "pwd",
    placeholder: "🔒********",
    label: "Password",
    type: "password",
  },
];

export const LoginShimmerText = "Signing you in...";
export const SignupShimmerText = "Creating your account...";

export const Login = "Login";
export const Signup = "SignUp";
