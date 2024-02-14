/*  2024-02-10 09:08:10

Input field value will be stored into the LocalStorage directly.

*/

import { useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useLocalStorage from "../hooks/useLocalStorage";

const Component12 = () => {
  const isOnline = useOnlineStatus();
  // function return value will be the initial value.
  const [name, setName] = useLocalStorage("name", () => {
    return "혜진";
  });
  const [age, setAge] = useState(0);

  return (
    <>
      <h1>Component12</h1>
      <h3>{isOnline ? "OnLine" : "OffLine"}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        type="number"
      />
    </>
  );
};

export default Component12;
