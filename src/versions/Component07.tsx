import { useState } from "react";
import Counter07 from "./components/Counter07";

const Component07 = () => {
  const [changeDogs, setChangeDogs] = useState(false);

  return (
    <div>
      <h1>Component07</h1>
      {changeDogs ? (
        <>
          <span># of Dogs:</span> <Counter07 key="dogs" />
        </>
      ) : (
        <>
          <span># of Cats:</span> <Counter07 key="cats" />
        </>
      )}
      <br />
      <button onClick={() => setChangeDogs((d) => !d)}>Swwitch</button>
    </div>
  );
};

export default Component07;
