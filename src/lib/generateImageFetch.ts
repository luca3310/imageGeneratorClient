import notify from "./notify";
import Parse from "parse/dist/parse.min.js";

export default async function generateImageFetch(
  e: React.FormEvent<HTMLFormElement>,
  setImageState: (state: "stale" | "loading" | "active") => void,
  setImageUrls: (urls: string[]) => void,
  setActiveImg: (url: string) => void,
) {
  e.preventDefault();

  const currentUser: Parse.User | undefined = Parse.User.current();
  const userId = currentUser?.id;
  const form = e.target as typeof e.target & {
    prompt: { value: string };
    style: { value: string };
    quality: { value: string };
  };

  const prompt = form.prompt.value;
  const style = form.style.value;
  const quality = form.quality.value;

  form.prompt.value = "";

  if (prompt !== "") {
    setImageState("loading");
    fetch("http://localhost:4242/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, style, quality, userId }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();

          notify(errorData.message);
          setImageState("stale");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setImageUrls([data.imageUrl]);
        setActiveImg(data.imageUrl);
        setImageState("active");
      })
      .catch((error) => {
        console.error("Error:", error);
        setImageState("stale");
      });
  } else {
    notify("prompt can not be empty!");
  }
}
