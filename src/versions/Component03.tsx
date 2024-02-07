/*  2024-02-07 03:48:06

Lesson: forwardRef

Send Ref to a component as a prop
By default, ref can not be passed to a component as a prop.
.
*/

import { useRef } from "react";
import { CustomInput } from "./components/CustomInput03";

const Component03 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputRef.current?.value);
  }

  return (
    <>
      <h1>Component03</h1>
      <h3>forwardRef</h3>
      <form onSubmit={handleSubmit}>
        <CustomInput ref={inputRef} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Component03;
