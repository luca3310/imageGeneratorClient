import Parse from "parse/dist/parse.min.js";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import notifyInfo from "../lib/notifyInfo";
import notify from "../lib/notify";

import UserDropdownMenu from "./UserDropdownMenu";

interface NavbarProps {
  navigate: any;
}

export default function Navbar({ navigate }: NavbarProps) {
  const [user, setUser] = useState<Parse.User | undefined>();

  const checkUserState = async function () {
    const currentUser: Parse.User | undefined = Parse.User.current();
    if (!currentUser) {
      setUser(currentUser);
    } else {
      try {
        await currentUser.fetch();
        setUser(currentUser);
        const emailVerified = currentUser.get("emailVerified");
        if (!emailVerified) {
          notifyInfo("email not notified");
        }
      } catch (error: any) {
        notify(`Error: ${error.message}`);
        console.error(error);
      }
    }
  };

  useEffect(() => {
    checkUserState();
  }, []);

  return (
    <>
      <ToastContainer />
      <nav className=" flex justify-around p-10 items-center bg-slate-700 bg-opacity-10 border-solid border-b-2 border-black">
        <h1 className="text-pink-700 text-4xl">LOGO</h1>
        <ul className="flex gap-7">
          {user ? (
            <>
              <li className="text-3xl hover:cursor-pointer hover:text-pink-700 transition duration-500">
                <a href="/pricing">+ {user.get("tokens")}</a>
              </li>
              <li className="text-3xl hover:cursor-pointer hover:text-pink-700 transition duration-500">
                <UserDropdownMenu
                  user={user}
                  setUser={setUser}
                  navigate={navigate}
                />
              </li>
            </>
          ) : (
            <>
              <li className="text-3xl hover:cursor-pointer hover:text-pink-700 transition duration-500">
                <a href="/registre">Sign Up</a>
              </li>
              <li className="text-3xl hover:cursor-pointer hover:text-pink-700 transition duration-500">
                <a href="/login">Login</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
