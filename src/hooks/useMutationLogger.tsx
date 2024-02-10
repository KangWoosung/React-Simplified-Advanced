/*  2024-02-10 09:11:26


이 코드는 React Hook인 useMutationLogger를 정의하고 있습니다. 
이 Hook은 DOM 변화를 감지하고, 변화가 감지될 때마다 콘솔에 "DOM Changed"라는 메시지를 출력합니다.

*/

import { useEffect } from "react";

const useMutationLogger = () => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      console.log("useMutationLogger Report: DOM Changed");
    });
    observer.observe(document.documentElement, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useMutationLogger;
