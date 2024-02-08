/*  2024-02-08 08:32:33

ErrorBoundary Testing

*/

import React, { useEffect } from "react";

const Component06 = () => {
  // This doesn't trigger ErrorBoundary because asynchronous errors are not catched by ErrorBoundary.
  useEffect(() => {
    fetch("/")
      .then(() => {
        throw new Error("fetch error");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //   throw new Error("Component");
  return <div>Component06</div>;
};

export default Component06;
