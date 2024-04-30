import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router-dom";
import notify from "../lib/notify";
import { ToastContainer } from "react-toastify";
import { FormEvent } from "react";

export default function Login() {
  const navigate = useNavigate();

  async function loginAccount(e: FormEvent) {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    try {
      await Parse.User.logIn(form.username.value, form.password.value, {});
      navigate("/");
    } catch (error: any) {
      notify(error.message);
    }
  }
  return (
    <main className="flex justify-center items-center h-[100vh]">
      <ToastContainer />
      <form
        onSubmit={loginAccount}
        className="flex justify-center items-center"
      >
        <fieldset className="border-solid text-xl border-black border-2 flex flex-col justify-center items-center p-10 gap-7">
          <legend className="text-2xl text-pink-600">Login</legend>
          <div className="flex gap-4">
            <input
              id="username"
              name="username"
              type="text"
              className="border-b-pink-200 border-b-solid border-b-2 outline-none focus:border-b-pink-600"
            />
            <label htmlFor="username">username</label>
          </div>
          <div className="flex gap-4">
            <input
              id="password"
              name="password"
              type="password"
              className="border-b-pink-200 border-b-solid border-b-2 outline-none focus:border-b-pink-600"
            />
            <label htmlFor="password">password</label>
          </div>
          <button
            className="px-7 py-1 border-pink-600 border-solid border-2 text-pink-600 hover:bg-pink-600 hover:text-white rounded transition duration-500"
            type="submit"
          >
            log in
          </button>
        </fieldset>
      </form>
    </main>
  );
}
