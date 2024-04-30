import "../App.css";

export default function Success() {
  return (
    <main className="flex justify-center pt-12">
      <h1 className="text-2xl">
        successfully added tokens,{" "}
        <a className="text-blue-500" href="/">
          homepage
        </a>
      </h1>
    </main>
  );
}
