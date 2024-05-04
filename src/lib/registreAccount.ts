import checkUsername from "../lib/registreUsernameCheck";
import checkPassword from "../lib/registrePasswordCheck";
import checkConfirmPassword from "../lib/registreConfirmPasswordCheck";
import Parse from "parse/dist/parse.min.js";
import { FormEvent } from "react";
import notify from "./notify";

export default async function registreAccount(
  e: FormEvent,
  setUsernameError: (usernameError: string) => void,
  setPasswordError: (passwordError: string) => void,
  setConfirmPasswordError: (confirmPasswordError: string) => void,
  navigate: any,
) {
  e.preventDefault();
  const form = e.target as typeof e.target & {
    username: { value: string };
    password: { value: string };
    confirmPassword: { value: string };
  };
  if (
    checkUsername(form.username.value, setUsernameError) &&
    checkPassword(form.password.value, setPasswordError) &&
    checkConfirmPassword(
      form.password.value,
      form.confirmPassword.value,
      setConfirmPasswordError,
    )
  ) {
    try {
      const createdUser: Parse.User = await Parse.User.signUp(
        form.username.value,
        form.password.value,
        {},
      );
      createdUser.set("tokens", 100);
      await createdUser.save();
      navigate("/");
    } catch (error: any) {
      switch (error.code) {
        case 202:
          setUsernameError(error.message);
          break;
        default: {
          notify(error.code + ": " + error.message);
          console.error(error);
        }
      }
    }
  }
}
