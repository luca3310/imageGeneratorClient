import { useEffect, useState } from "react";
import Parse from "parse/dist/parse.min.js";
import notify from "../lib/notify";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState<Parse.User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();

      const currentUser: Parse.User | undefined = Parse.User.current();
      if (!currentUser) {
        setUser(currentUser);
        navigate("/");
      } else {
        setUser(currentUser);
        notify("logout failed");
      }
    } catch (error: any) {
      alert(`Error! ${error.message}`);
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser: Parse.User | undefined = Parse.User.current();
        setUser(currentUser);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.getUsername()}</p>
      <p>Tokens: {user.get("tokens")}</p>
      <button onClick={doUserLogOut}>log out</button>
    </div>
  );
}

export default UserProfile;
