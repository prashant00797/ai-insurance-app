import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firbase";

export const signUpUserService = async (email, pwd, fname) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);

  //update profile with userName
  await updateProfile(userCredential.user, {
    displayName: fname,
  });

  return userCredential.user;
};

export const logInUserService = async (email, pwd) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, pwd);
  return userCredential.user;
};

export const logOutUserService = async () => {
  const loggedOutUser = await signOut(auth);
  return loggedOutUser;
};
