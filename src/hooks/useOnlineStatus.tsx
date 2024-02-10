/*  2024-02-10 12:14:27

Monitors "onLine | offLine" navigator event and retirn result.

*/

import { useDebugValue, useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useDebugValue(isOnline);

  useEffect(() => {
    function handler() {
      setIsOnline(navigator.onLine);
    }
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);

    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
