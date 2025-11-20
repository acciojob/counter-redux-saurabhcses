import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterActions";
import './../styles/App.css';

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2>{count}</h2>
      <div className="counter">
        <button onClick={() => dispatch(decrement())}>decrement</button>
        {/* <span>{count}</span> */}
        <button onClick={() => dispatch(increment())}>increment</button>
      </div>
    </div>
  );
};

export default App;
