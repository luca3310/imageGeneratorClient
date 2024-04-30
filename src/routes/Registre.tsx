import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router-dom";
import notify from "../lib/notify";
import { ToastContainer } from "react-toastify";
import { FormEvent } from "react";
import { useState } from "react";

export default function Registre() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();
  async function registreAccount(e: FormEvent) {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };
    if (form.password.value !== form.confirmPassword.value) {
      setUsernameError("");
      setPasswordError("password needs to be the same");
      setConfirmPasswordError("password needs to be the same");
    } else {
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
        notify(error.message);
      }
    }
  }
  return (
    <main className="flex justify-center items-center h-[100vh] bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={registreAccount}
        className="flex justify-center items-center w-1/3"
      >
        <fieldset className="border-solid text-xl border-black border-2 w-full flex flex-col p-10 gap-7">
          <legend className="text-4xl text-blue-600">sign up</legend>
          <div className="flex flex-col gap-4">
            <label htmlFor="username" className="text-2xl">
              username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className={`p-2 rounded border-black border-solid border-2 outline-none focus:border-blue-500 ${usernameError === "" ? null : "border-red-600"}`}
            />
            {usernameError === "" ? (
              <p className="text-gray-500">needs to be the same as password</p>
            ) : (
              <p className="text-red-600">{usernameError}</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="text-2xl">
              password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className={`p-2 rounded border-black border-solid border-2 outline-none focus:border-blue-500 ${passwordError === "" ? null : "border-red-600"}`}
            />

            {passwordError === "" ? (
              <p className="text-gray-500">needs to be the same as password</p>
            ) : (
              <p className="text-red-600">{passwordError}</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="confirmPassword" className="text-2xl">
              confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className={`p-2 rounded border-black border-solid border-2 outline-none focus:border-blue-500 ${confirmPasswordError === "" ? null : "border-red-600"}`}
            />

            {confirmPasswordError === "" ? (
              <p className="text-gray-500">needs to be the same as password</p>
            ) : (
              <p className="text-red-600">{confirmPasswordError}</p>
            )}
          </div>
          <button
            className="w-1/2 py-3 border-blue-600 border-solid self-start text-3xl border-2 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition duration-500"
            type="submit"
          >
            sign up
          </button>
        </fieldset>
      </form>
    </main>
  );
}
