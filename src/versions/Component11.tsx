/*  2024-02-10 08:09:11

1. This code snippet is important when debugging renders
    - This slows down the render speed.
    - Slow rendering emulator code
        const now = performance.now();
        while (now > performance.now() - 100) {
            // Do nothing
        }

2. UseEffect makes the ADDITIONAL RENDER after component is fully rendered.
    - Sometimes this ADDITIONAL RENDER makes bad user experiences

3. To avoid this bad UX caused by the ADDITIONAL RENDER, useLayoutEffect() is an option. 
    - UseLayoutEffect() is an in-line render method that makes the component to wait until the useLayoutEffect() is fully rendered.
    - useLayoutEffect() also can cause bad UX, because useLayoutEffect() makes the whole component to wait until the useLayoutEffect() is fully rendered.

4. Just remember that UseLayoutEffect() is there as an option. 


*/

import React, { useLayoutEffect, useRef, useState } from "react";
import useMutationLogger from "./components/useMutationLogger11";

const Component11 = () => {
  useMutationLogger();
  const [isOpen, setIsOpen] = useState(false);
  const [popupTop, setPopupTop] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    //   useEffect(() => {
    if (buttonRef.current == null || !isOpen) return setPopupTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setPopupTop(bottom + 25);
  }, [isOpen]);

  const now = performance.now();
  while (now > performance.now() - 100) {
    // Do nothing
  }

  return (
    <>
      <h1>Component10</h1>
      <button ref={buttonRef} onClick={() => setIsOpen((o) => !o)}>
        Show
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: `${popupTop}px`,
            border: "1px solid black",
          }}
        >
          Tooltip
        </div>
      )}
    </>
  );
};

export default Component11;
