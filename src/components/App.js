import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button id="increment" onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button id="decrement" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
