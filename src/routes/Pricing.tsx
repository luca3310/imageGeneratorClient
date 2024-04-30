import Parse from "parse/dist/parse.min.js";
import { FormEvent } from "react";
import PriceCard from "../components/PriceCard";

export default function Pricing() {
  interface Item {
    name: string;
    price: number;
    tokens: number;
  }

  const items: Item[] = [
    { price: 3.99, name: "standard", tokens: 200 },
    { price: 7.99, name: "premium", tokens: 500 },
    { price: 14.99, name: "deluxe", tokens: 1000 },
  ];

  const handleSubmit = async (e: FormEvent, type: string) => {
    e.preventDefault();

    const currentUser: Parse.User | undefined = Parse.User.current();
    const username = currentUser?.get("username");

    const res = await fetch(`http://localhost:4242/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, type }),
    });
    const body = await res.json();
    window.location.href = body.url;
  };

  return (
    <main className="h-[100vh] flex flex-col justify-center items-center gap-12">
      <h1 className="text-7xl">Pricing</h1>
      <div className="flex items-center justify-center gap-4">
        {items.map((item: Item) => {
          return (
            <PriceCard
              handleSubmit={handleSubmit}
              name={item.name}
              price={item.price}
              tokens={item.tokens}
            />
          );
        })}
      </div>
    </main>
  );
}
