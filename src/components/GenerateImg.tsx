import generateImageFetch from "../lib/generateImageFetch";

interface GeneratePropsTypes {
  setImageUrls: (urls: string[]) => void;
  setActiveImg: (url: string) => void;
  setImageState: (state: "stale" | "loading" | "active") => void;
}

export default function GenerateImg(props: GeneratePropsTypes) {
  const handleGenerateImageSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    await generateImageFetch(
      e,
      props.setImageState,
      props.setImageUrls,
      props.setActiveImg,
    );
  };
  return (
    <form
      onSubmit={handleGenerateImageSubmit}
      className="flex flex-col w-[38rem] gap-5"
    >
      <div className="flex justify-between">
        <input
          placeholder="a red cat..."
          name="prompt"
          className="w-[60%] placeholder-slate-600 bg-transparent border-2 border-solid border-transparent border-b-black focus:outline-none focus:border-b-pink-700 p-2 "
        />
        <button className="text-pink-700 text-xl border-solid border-2 border-pink-700 px-2 rounded hover:bg-pink-700 hover:text-white transition-all duration-500">
          generate image
        </button>
      </div>
      <div className="flex justify-between w-[60%]">
        <select
          className="p-2 bg-pink-700 w-1/3 hover:cursor-pointer rounded text-white"
          name="style"
          id="style"
        >
          <option value="vivid">vivid</option>
          <option value="natural">natural</option>
        </select>
        <select
          name="quality"
          id="quality"
          className="p-2 bg-pink-700 w-1/3 hover:cursor-pointer rounded text-white"
        >
          <option value="standard">standard</option>
          <option value="hd">hd</option>
        </select>
      </div>
    </form>
  );
}
