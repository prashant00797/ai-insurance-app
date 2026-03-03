import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utility/firbase";

export const signUpUserService = async (email, pwd) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
  return userCredential.user;
};

export const logInUserService = async (email, pwd) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, pwd);
  return userCredential.user;
};
