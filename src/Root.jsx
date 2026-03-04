import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./utility/firbase";
import { addUser, removeUser } from "./store/userSlice";
import appRoutes from "./router/routerConfig";
import { RouterProvider } from "react-router";

//Global listener component
const Root = () => {
  const [authCheck, setAuthCheck] = useState(true);
  const dispatch = useDispatch();

  //global auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          }),
        );
      } else {
        dispatch(removeUser());
      }
      setAuthCheck(false);
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  if (authCheck) return <div>....loading</div>;

  return <RouterProvider router={appRoutes} />;
};
export default Root;
