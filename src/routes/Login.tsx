import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginAccount from "../lib/loginAccount";

interface Field {
  name: string;
  displayName: string;
  error: string;
  type: string;
}

export default function Login() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleLoginAccount = (e: React.FormEvent<HTMLFormElement>) => {
    loginAccount(e, setUsernameError, setPasswordError, navigate);
  };

  const formFields = [
    {
      name: "username",
      displayName: "username/email",
      error: usernameError,
      type: "text",
    },
    {
      name: "password",
      displayName: "password",
      error: passwordError,
      type: "password",
    },
  ];

  return (
    <main className="flex justify-center items-center h-[100vh] bg-gray-100">
      <form
        onSubmit={handleLoginAccount}
        className="flex justify-center items-center w-1/3"
      >
        <fieldset className="border-solid text-xl border-black border-2 w-full flex flex-col p-10 gap-7">
          <legend className="text-4xl text-blue-600">log in</legend>
          {formFields.map((field: Field) => {
            return (
              <div className="flex flex-col gap-4" key={field.name}>
                <label
                  htmlFor={field.name}
                  className={`text-2xl ${field.error === "" ? null : "text-red-500"}`}
                >
                  {field.displayName}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  className={`p-2 rounded border-black border-solid border-2 outline-none focus:border-blue-500 ${field.error === "" ? null : "border-red-600"}`}
                />
                {field.error === "" ? null : (
                  <p className="text-red-600 animate-shake">{field.error}</p>
                )}
              </div>
            );
          })}
          <button
            className="w-1/2 py-3 border-blue-600 border-solid self-start text-3xl border-2 text-blue-600 hover:bg-blue-600 hover:text-white rounded transition duration-500"
            type="submit"
          >
            log in
          </button>
        </fieldset>
      </form>
    </main>
  );
}
