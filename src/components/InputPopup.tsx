import { useState } from "react";
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

interface InputPopupProps {
  name: string;
  description: string;
  cancelFunction: () => void;
  continueFunction: (email: string) => void;
  buttonStyling: string;
}

export default function InputPopup({
  name,
  description,
  cancelFunction,
  continueFunction,
  buttonStyling,
}: InputPopupProps) {
  const [input, setInput] = useState("");

  const handleEmailChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonStyling}>{name}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-2">{description}</AlertDialogTitle>
          <AlertDialogDescription>
            <Input value={input} onChange={(e) => handleEmailChange(e)} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancelFunction}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => continueFunction(input)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
