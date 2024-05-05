import { useEffect, useState } from "react";
import Parse from "parse/dist/parse.min.js";
import notify from "../lib/notify";
import notifyInfo from "@/lib/notifyInfo";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function UserProfile() {
  const [user, setUser] = useState<Parse.User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const cancel = () => {
    notifyInfo("account deletetion cancelled");
  };

  const doUserDelete = async () => {
    try {
      await user.destroy();
      navigate("/");
    } catch (error: any) {
      console.error("Error while deleting user", error);
      notify(error.message);
    }
  };

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
    <main className="p-12 flex flex-col gap-1">
      <ToastContainer />
      <h1 className="font-bold text-2xl">User Profile</h1>
      <p>Username: {user.getUsername()}</p>
      <p>Tokens: {user.get("tokens")}</p>
      <div className="flex gap-7">
        <button className="text-red-600" onClick={doUserLogOut}>
          log out
        </button>
        <AlertDialog>
          <AlertDialogTrigger className="text-red-600">
            delete account
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={cancel}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={doUserDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </main>
  );
}

export default UserProfile;
