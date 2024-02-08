/*  2024-02-08 09:24:02

Capture Event Listeners

*/

import { useState } from "react";
import { createPortal } from "react-dom";

function Component08() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Component08</h1>
      <div onClickCapture={() => console.log("Outer Div")}>
        <h3>App Content</h3>
        <button onClick={() => setIsOpen(!isOpen)}>Show Message</button>
        <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Secret Message
          <br />
          Click to Close
        </AlertMessage>
      </div>
    </>
  );
}

type AlertMessageType = {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

function AlertMessage({ children, onClose, isOpen }: AlertMessageType) {
  if (!isOpen) return null;

  const alertOverlay = document.querySelector("#alert-overlay");
  if (alertOverlay === null) return null;

  return createPortal(
    <div
      onClickCapture={() => {
        console.log("Modal");
        onClose();
      }}
      style={{
        cursor: "pointer",
        position: "fixed",
        top: "5rem",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#777",
        borderRadius: ".5rem",
        padding: "1rem",
      }}
    >
      {children}
    </div>,
    alertOverlay
  );
}

export default Component08;
