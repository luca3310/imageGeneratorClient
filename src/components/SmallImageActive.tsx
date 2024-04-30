interface GeneratePropsTypes {
  setActiveImg: (url: string) => void;
  img: string;
}

export default function SmallImgActive(props: GeneratePropsTypes) {
  return (
    <div
      onClick={() => props.setActiveImg(props.img)}
      className="border-solid border-black border-2 w-[7rem] aspect-square rounded hover:cursor-pointer hover:border-red-400 transition duration-500"
    >
      <img className="object-cover w-full h-full" src={props.img} />
    </div>
  );
}
