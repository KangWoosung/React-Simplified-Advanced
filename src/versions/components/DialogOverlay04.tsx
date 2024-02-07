/*  2024-02-07 02:36:53

Escape key press do not work properly.
Maybe dialog.addEventListener("close", onClose) is wrong.

I leave it behind.

*/

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type DialogOverlayType = {
  isOpen: boolean;
  onClose: (event: Event) => void;
  children: React.ReactNode;
};
//  dialogRef: React.RefObject<HTMLDialogElement>;

const DialogOverlayComponent = ({
  isOpen,
  onClose,
  children,
}: DialogOverlayType) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current === null) return;
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  // Escape key doesn't work because isOpen state is remained true.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog === null) return;
    console.log("useEffect triggered", isOpen);

    dialog.addEventListener("close", () => {
      console.log("Escape key pressed");
      onClose;
    });
    return () => {
      dialog.removeEventListener("close", onClose);
    };
  }, [onClose]);

  const alertOverlay = document.querySelector("#alert-overlay");
  if (alertOverlay === null) return null;

  return createPortal(
    <>
      <dialog ref={dialogRef}>{children}</dialog>
    </>,
    alertOverlay
  );
};

export const DialogOverlay04 = DialogOverlayComponent;
