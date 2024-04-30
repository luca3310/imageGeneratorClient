import generateVarationsFetch from "../lib/generateVariationsFetch";
import deleteImage from "../lib/deleteImage";

interface GeneratePropsTypes {
  setImageUrls: (urls: string[]) => void;
  setActiveImg: (url: string) => void;
  setImageState: (state: "stale" | "loading" | "active") => void;
  activeImg: string;
}

export default function EditImg(props: GeneratePropsTypes) {
  const handleGenerateVariationsSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    await generateVarationsFetch(
      e,
      props.activeImg,
      props.setImageState,
      props.setImageUrls,
    );
  };

  return (
    <form
      onSubmit={handleGenerateVariationsSubmit}
      className="flex items-center justify-between w-[38rem]"
    >
      <svg
        onClick={() =>
          deleteImage(
            props.setActiveImg,
            props.setImageUrls,
            props.setImageState,
          )
        }
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-trash hover:text-pink-700 hover:cursor-pointer transition duration-500"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
      </svg>

      <button className="text-pink-700 border-solid border-2 border-pink-700 px-3 py-1 text-xl rounded hover:bg-pink-700 hover:text-white transition-all duration-500">
        generate variations
      </button>
    </form>
  );
}
