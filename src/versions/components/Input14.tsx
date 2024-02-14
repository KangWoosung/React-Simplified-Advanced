/*  2024-02-12 06:05:26


*/

import React, { ForwardedRef, forwardRef, useImperativeHandle } from "react";

type Inner14Props = React.InputHTMLAttributes<HTMLInputElement>;
export interface Inner14Handle {
  alertHi: () => void;
}

const Inner14 = forwardRef(
  (props: Inner14Props, ref: ForwardedRef<Inner14Handle>) => {
    const alertHi = () => {
      alert("Hi");
    };
    useImperativeHandle(
      ref,
      () => ({
        alertHi,
      }),
      []
    );
    return (
      <>
        <h3>Inner14</h3>
        <input {...props} ref={ref as React.RefObject<HTMLInputElement>} />
      </>
    );
  }
);

export default Inner14;
