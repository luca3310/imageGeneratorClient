import { FormEvent } from "react";
import notify from "./notify";
import Parse from "parse/dist/parse.min.js";

export default async function generateVarationsFetch(
  e: FormEvent,
  activeImg: string,
  setImageState: (state: "stale" | "loading" | "active") => void,
  setImageUrls: (urls: string[]) => void,
) {
  e.preventDefault();

  const currentUser: Parse.User | undefined = Parse.User.current();
  const userId = currentUser?.id;

  setImageState("loading");
  fetch("http://localhost:4242/editImage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ activeImg, userId }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json();
        notify(errorData.message);
        setImageState("stale");
      }
      return response.json();
    })
    .then((data) => {
      setImageUrls([activeImg, ...data.imageUrl]);
      setImageState("active");
    })
    .catch((error) => {
      console.error("Error:", error);
      setImageState("stale");
    });
}
