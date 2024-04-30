import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

import StaleSvg from "../components/StaleSvg";
import LoadingSvg from "../components/LoadingSvg";
import ActiveImg from "../components/ActiveImg";
import GenerateImg from "../components/GenerateImg";
import EditImg from "../components/EditImg";
import SmallImgActive from "../components/SmallImageActive";

export default function Root() {
  const [imageUrls, setImageUrls] = useState<string[]>(["", "", "", ""]);
  const [activeImg, setActiveImg] = useState<string>("");
  const [imageState, setImageState] = useState<"stale" | "loading" | "active">(
    "stale",
  );

  const activeImageState = {
    stale: <StaleSvg size="50" />,
    loading: <LoadingSvg size="50" />,
    active: <ActiveImg activeImg={activeImg} />,
  };

  const getSmallImageState = (img: string) => {
    return {
      stale: <StaleSvg size="20" />,
      loading: <LoadingSvg size="20" />,
      active: <SmallImgActive setActiveImg={setActiveImg} img={img} />,
    };
  };

  const formState = {
    stale: (
      <GenerateImg
        setActiveImg={setActiveImg}
        setImageUrls={setImageUrls}
        setImageState={setImageState}
      />
    ),
    loading: null,
    active: (
      <EditImg
        setActiveImg={setActiveImg}
        setImageUrls={setImageUrls}
        setImageState={setImageState}
        activeImg={activeImg}
      />
    ),
  };

  return (
    <div className="h-[100vh] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <main className="flex justify-center gap-20 mt-5">
        <div className="flex flex-col gap-4 bg-slate-700 p-5 rounded w-1/4 bg-opacity-10 border-solid border-black border-2">
          <h1 className="text-3xl text-pink-700">Image Generator</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            imperdiet ante a varius ultricies. Curabitur mollis mattis eleifend.
            Proin ac ligula quis ligula placerat mattis. Ut risus purus,
            fermentum a felis ut, molestie auctor massa. Integer ac metus ac
            metus finibus pellentesque. Nullam euismod mi quis lectus bibendum
            feugiat. Quisque a maximus nisi, at efficitur nibh. Curabitur ac
            arcu semper enim vehicula vestibulum vitae eu nibh. Donec eleifend
            lectus at erat rutrum, quis tincidunt sem posuere. Aenean sit amet
            magna in nulla convallis faucibus. Nam vehicula suscipit metus, ut
            congue nibh condimentum ut.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-[1rem] h-[30rem]">
            <div className="bg-slate-700 relative bg-opacity-10 border-solid border-black border-2 w-[30rem] aspect-square rounded flex justify-center items-center">
              {activeImageState[imageState]}
            </div>
            <div className="flex flex-col justify-between">
              {imageUrls.map((img, index) => {
                return (
                  <div key={index} className="flex flex-col justify-between">
                    <div className="bg-slate-700 bg-opacity-10 border-solid border-black border-2 w-[7rem] aspect-square rounded flex justify-center items-center">
                      {getSmallImageState(img)[imageState]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {formState[imageState]}
        </div>
      </main>
    </div>
  );
}
