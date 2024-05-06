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

import notifyInfo from "@/lib/notifyInfo";
import deleteAccount from "@/lib/deleteAccount";

interface UserDeleteButtonProps {
  user: Parse.User;
  navigate: any;
}

export default function UserDeleteButton({
  user,
  navigate,
}: UserDeleteButtonProps) {
  const cancel = () => {
    notifyInfo("account deletetion cancelled");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-red-600">
        delete account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-600">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 box-border hover:bg-transparent border-solid border-2 hover:border-red-600 transition duration-500 hover:text-red-600"
            onClick={() => deleteAccount(user, navigate)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
