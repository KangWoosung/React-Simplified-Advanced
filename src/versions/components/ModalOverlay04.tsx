/*  2024-02-07 07:19:58

createPortal from react-dom
using createPortal to render modal to #alert-overlay which is right after the root element.

*/

import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalOverlay04Props = {
  isOpen: boolean;
  onClose: (arg0: boolean) => void;
  children: React.ReactNode;
};

const ModalOverlay04 = ({ isOpen, onClose, children }: ModalOverlay04Props) => {
  useEffect(() => {
    const onKeyup = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(false);
      }
    };
    window.addEventListener("keyup", onKeyup);
    // reset
    return () => {
      window.removeEventListener("keyup", onKeyup);
    };
  }, [onClose]);

  const alertOverlay = document.querySelector("#alert-overlay");
  if (alertOverlay === null) return null;

  return createPortal(
    <>
      <div className={`modal-overlay ${isOpen ? `show` : ``}`}>
        <div className="modal">
          {children}
          <button onClick={() => onClose(false)}>Close</button>
        </div>
      </div>
    </>,
    alertOverlay
  );
};

export default ModalOverlay04;
