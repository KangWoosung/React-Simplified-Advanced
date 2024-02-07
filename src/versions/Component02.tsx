/*  2024-02-07 03:25:24

Lesson: CreatePortal from React-Dom
Popup division can be parent element relative.
To avoid this, use createPortal to render the popup division as a sibling of the root/subRoot element.

1. Add #alert-overlay element to index.html
2. Use createPortal to render the AlertMessage component to #alert-overlay
*/

import { useState } from "react";
import { createPortal } from "react-dom";

const Component02 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Component02</h1>
      <div>
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
};

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
      onClick={onClose}
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

export default Component02;
