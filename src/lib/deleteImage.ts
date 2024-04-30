export default function deleteImage(
  setActiveImg: (url: string) => void,
  setImageUrls: (urls: string[]) => void,
  setImageState: (state: "stale" | "loading" | "active") => void,
) {
  setActiveImg("");
  setImageUrls(["", "", "", ""]);
  setImageState("stale");
}
