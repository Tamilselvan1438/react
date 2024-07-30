import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <center>
      <div className="Counter">
        <button onClick={handleIncrement}>Increment</button>
        <span>count: {count}</span>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </center>
  );
}

export default Counter;