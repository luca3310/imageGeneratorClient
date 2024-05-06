import { useEffect, useState } from "react";
import Parse from "parse/dist/parse.min.js";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserDeleteButton from "@/components/UserDeleteButton";
import UserLogoutButton from "@/components/UserLogoutButton";
import EmailVerifyForm from "@/components/EmailVerifyForm";

function UserProfile() {
  const [user, setUser] = useState<Parse.User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  return loading ? (
    <div>Loading...</div>
  ) : !user ? (
    <div>User not found</div>
  ) : (
    <main className="p-12 flex flex-col gap-1">
      <ToastContainer />
      <h1 className="font-bold text-2xl">User Profile</h1>
      <p>Username: {user.getUsername()}</p>
      <p>Tokens: {user.get("tokens")}</p>
      <div className="flex gap-7">
        <UserLogoutButton setUser={setUser} navigate={navigate} />
        <UserDeleteButton user={user} navigate={navigate} />
      </div>
      <EmailVerifyForm />
    </main>
  );
}

export default UserProfile;
