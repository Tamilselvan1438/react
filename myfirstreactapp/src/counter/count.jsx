import React, { useState, useEffect } from "react";
import "./count.css"

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    alert(`count  ${count}`)
  },[count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <center>
      <div >
        <button onClick={handleDecrement} className="counter">Decrement</button>
        <span className="big">count: {count}</span>
        <button onClick={handleIncrement} className="counter">Increment</button>
      </div>
    </center>
  );
}

export default Counter;
