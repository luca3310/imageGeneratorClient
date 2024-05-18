import logoutAccount from "@/lib/logoutAccount";
import UserDeleteButton from "./UserDeleteButton";
import notifyInfo from "@/lib/notifyInfo";
import InputPopup from "./InputPopup";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserDropdownMenuProps {
  user: Parse.User;
  setUser: (user: Parse.User) => void;
  navigate: any;
}

export default function UserDropdownMenu({
  user,
  setUser,
  navigate,
}: UserDropdownMenuProps) {
  const navigatePricing = () => {
    navigate("/pricing");
  };

  const cancelFunction = () => {
    notifyInfo("email verify cancel");
  };

  const continueFunction = (email: string) => {
    notifyInfo(email);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-3xl flex gap-1 items-center">
        {user.getUsername()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-pink-700 border-black">
        <DropdownMenuLabel className="text-xl">Options</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-black" />
        <DropdownMenuItem
          onClick={navigatePricing}
          className="hover:cursor-pointer"
        >
          Pricing
        </DropdownMenuItem>

        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => logoutAccount(setUser, navigate)}
        >
          Logout
        </DropdownMenuItem>
        <UserDeleteButton user={user} navigate={navigate} />
        <InputPopup
          name="verify email"
          description="verify your email"
          cancelFunction={cancelFunction}
          continueFunction={continueFunction}
          buttonStyling="text-sm hover:bg-white w-full text-start px-2 py-1 rounded"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
