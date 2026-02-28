import { useLocation } from "react-router";
import AuthUI from "../ui/AuthUI";
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
