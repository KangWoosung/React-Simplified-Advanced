/*  2024-02-08 08:55:22


*/
import { useState } from "react";

const Counter07 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>Counter07</h3>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
};

export default Counter07;
