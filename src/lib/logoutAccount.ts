import Parse from "parse/dist/parse.min.js";
import notify from "./notify";

export default async function logoutAccount(
  setUser: (user: Parse.User | null) => void,
  navigate: any,
) {
  try {
    await Parse.User.logOut();

    const currentUser: Parse.User | null = Parse.User.current();
    if (!currentUser) {
      setUser(null);
      navigate("/");
    } else {
      setUser(currentUser);
      notify("Logout failed");
    }
  } catch (error: any) {
    notify(`Error! ${error.message}`);
  }
}
