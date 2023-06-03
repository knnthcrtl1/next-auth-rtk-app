"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/confgureStore";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-white p-4">
        <div className="flex-col justify-center items-center flex">
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <div>{count}</div>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Add 300
          </button>
        </div>
      </div>
    </main>
  );
}
