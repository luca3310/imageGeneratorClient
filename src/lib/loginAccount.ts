import Parse from "parse/dist/parse.min.js";
import { FormEvent } from "react";

export default async function loginAccount(
  e: FormEvent,
  setUsernameError: (usernameError: string) => void,
  setPasswordError: (passwordError: string) => void,
  navigate: any,
) {
  e.preventDefault();
  const form = e.target as typeof e.target & {
    username: { value: string };
    password: { value: string };
  };
  try {
    await Parse.User.logIn(form.username.value, form.password.value, {});
    navigate("/");
  } catch (error: any) {
    setUsernameError(error.message);
    setPasswordError(error.message);
  }
}
