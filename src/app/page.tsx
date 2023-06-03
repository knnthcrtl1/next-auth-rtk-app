"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/confgureStore";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { UserType, useGetAllUserQuery, userApi } from "./redux/userSlice";

export default function Home() {
  const { count } = useSelector((state: RootState) => {
    return {
      count: state.counter.value,
    };
  });

  const { data: UserData = [], error, isLoading } = useGetAllUserQuery(5);

  const dispatch = useDispatch();

  const renderUserData = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <div>
        {UserData.map((e: UserType) => (
          <p key={e.id}>{e?.name}</p>
        ))}
      </div>
    );
  };

  const onRefreshUserData = () => {
    dispatch(userApi.util.invalidateTags(["Users"]));
  };

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
          {renderUserData()}
          <button aria-label="Decrement value" onClick={onRefreshUserData}>
            Refresh Data
          </button>
        </div>
      </div>
    </main>
  );
}
