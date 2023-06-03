import React from "react";
import "./index.css";
import { store } from "./redux/confgureStore";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-white p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae in nam
        architecto aperiam, nobis velit quod dolore atque illo id neque nihil
        quasi beatae? Voluptatem non alias nemo repellat.
      </div>
    </main>
  );
}
