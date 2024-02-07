/*  2024-02-07 06:46:09


*/

import { forwardRef } from "react";

type CustomInputProps = {
  ref: React.RefObject<HTMLInputElement>;
};

const CustomInputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CustomInputProps
> = (props, ref) => {
  return (
    <>
      <h3>forwardRef</h3>
      <input {...props} ref={ref} style={{ border: "2px solid navy" }} />
    </>
  );
};

export const CustomInput = forwardRef(CustomInputComponent);
