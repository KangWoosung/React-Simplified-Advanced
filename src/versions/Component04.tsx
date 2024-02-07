/*  2024-02-07 01:57:33

1. Create a CustomModal component that renders a custom modal over the top of the application when opened.
This modal should be opened by clicking the open button and closed by clicking the close button.
This modal should also close when the Escape key is pressed.

2. Create a DialogModal component that renders a dialog element over the top of the application when opened.
This modal should have the exact same props/behavior as the CustomModal component.
dialog elements automatically close when clicking the Escape key, but you will need to be careful about how you implement this since you need to make sure this automatic behavior links up with your React state/logic.



*/

import { useState } from "react";
import ModalOverlay04 from "./components/ModalOverlay04";
import { DialogOverlay04 } from "./components/DialogOverlay04";

function Component04() {
  const [modalState, setModalState] = useState(false);
  const [dialogState, setDialogState] = useState(false);
  //   const dialogRef = useRef<HTMLDialogElement>(null);

  const customModal = () => {
    setModalState(true);
  };
  const dialogControl = () => {
    setDialogState(true);
    console.log("dialog control", dialogState);
  };

  return (
    <>
      <h1>Component04</h1>

      {/* Data attributes are only used for the JS below and not needed for the CSS or React code */}
      <button onClick={customModal}>Show Custom Modal</button>
      <br />
      <button onClick={dialogControl}>Show Dialog Modal</button>

      <ModalOverlay04 isOpen={modalState} onClose={() => setModalState(false)}>
        <h3>ModalOverlay04</h3>
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
      </ModalOverlay04>
      <DialogOverlay04
        isOpen={dialogState}
        onClose={() => setDialogState(false)}
      >
        <h3>DialogOverlay04</h3>
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button onClick={() => setDialogState(false)}>Close</button>
      </DialogOverlay04>
    </>
  );
}

export default Component04;
