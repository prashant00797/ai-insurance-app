import { useLocation } from "react-router";
const AuthPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>{pathname === "/login" ? "AuthPage Login" : "AuthPage Signup"}</div>
  );
};

export default AuthPage;
