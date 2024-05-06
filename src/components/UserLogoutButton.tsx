import logoutAccount from "@/lib/logoutAccount";

interface UserLogoutButtonProps {
  setUser: (user: Parse.User | null) => void;
  navigate: any;
}

export default function UserLogoutButton({
  setUser,
  navigate,
}: UserLogoutButtonProps) {
  return (
    <button
      className="text-red-600"
      onClick={() => logoutAccount(setUser, navigate)}
    >
      Log out
    </button>
  );
}
