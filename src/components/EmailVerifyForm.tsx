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
import { Input } from "@/components/ui/input";
import notifyInfo from "@/lib/notifyInfo";

export default function EmailVerifyForm() {
  const cancel = () => {
    notifyInfo("email verify cancelled");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-sm hover:bg-white w-full text-start px-2 py-1 rounded">
        email verify
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-2">
            verify your email
          </AlertDialogTitle>
          <AlertDialogDescription>
            <Input />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
