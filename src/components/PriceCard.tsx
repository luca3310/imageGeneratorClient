import { FormEvent } from "react";

interface GeneratePropsTypes {
  name: string;
  price: number;
  tokens: number;
  handleSubmit: (arg1: FormEvent, arg2: string) => void;
}

export default function PriceCard(props: GeneratePropsTypes) {
  return (
    <form
      key={props.name}
      className="flex flex-col p-4 rounded gap-7 border-slate-200 border-2 border-solid"
      onSubmit={(e) => props.handleSubmit(e, props.name)}
    >
      <h3>{props.name}</h3>
      <h2 className="text-6xl">${props.price}</h2>
      <button
        className="bg-pink-600 text-white w-[30rem] text-2xl p-2 rounded hover:bg-pink-400 transition duration-500"
        type="submit"
      >
        Checkout
      </button>

      <p>{props.tokens} tokens</p>
    </form>
  );
}
