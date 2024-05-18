import { useNavigate } from "react-router-dom";
import { useState } from "react";
import registreAccount from "../lib/registreAccount";
import { Link } from "react-router-dom";

interface Field {
  name: string;
  displayName: string;
  error: string;
  comment: string;
  type: string;
}

export default function Registre() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const formFields = [
    {
      name: "username",
      displayName: "username",
      error: usernameError,
      comment: "username needs to be 3-10 characters",
      type: "text",
    },
    {
      name: "password",
      displayName: "password",
      error: passwordError,
      comment: "password needs to be 8-12 characters",
      type: "password",
    },
    {
      name: "confirmPassword",
      displayName: "confirm password",
      error: confirmPasswordError,
      comment: "needs to be the same as password",
      type: "password",
    },
  ];

  const handleRegistreAccount = (e: React.FormEvent<HTMLFormElement>) => {
    registreAccount(
      e,
      setUsernameError,
      setPasswordError,
      setConfirmPasswordError,
      navigate,
    );
  };

  return (
    <main className="flex justify-center items-center h-[100vh] bg-gray-100">
      <form
        onSubmit={handleRegistreAccount}
        className="flex justify-center items-center w-1/3"
      >
        <fieldset className="border-solid text-xl border-black border-2 w-full flex flex-col p-10 gap-7">
          <legend className="text-4xl text-blue-600">sign up</legend>
          {formFields.map((field: Field) => {
            return (
              <div className="flex flex-col gap-4" key={field.name}>
                <label
                  htmlFor={field.name}
                  className={`text-2xl ${field.error && "text-red-500"}`}
                >
                  {field.displayName}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  className={`p-2 rounded border-black border-solid border-2 outline-none focus:border-blue-500 ${field.error && "border-red-600"}`}
                />
                {field.error ? (
                  <p className="text-red-600 animate-shake">{field.error}</p>
                ) : (
                  <p className="text-gray-500">{field.comment}</p>
                )}
              </div>
            );
          })}
          <button
            className="w-1/2 py-3 border-blue-600 border-solid self-start text-3xl border-2 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition duration-500"
            type="submit"
          >
            sign up
          </button>
          <Link
            className="text-gray-500 hover:text-black transition duration-500 underline"
            to="/login"
          >
            already an account?
          </Link>
        </fieldset>
      </form>
    </main>
  );
}
