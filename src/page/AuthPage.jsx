import { useLocation } from "react-router";
import AuthUI from "../AuthUI";
const AuthPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <AuthUI pathname={pathname} />
    </>
  );
};

export default AuthPage;
