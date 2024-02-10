/* 2023-09-10 23:33:44
훅이 리턴하는 setValue 는 실제로 LocalStorage 에 저장하는 함수가 된다. 
컴포넌트에서 가져다 쓸 때에는,
const [value, setValue] = useLocalStorage("TODOS", []);
setValue([...value, { id: crypto.randomUUID(), name: name, completed: false }]);
이런 식으로 쓰면 된다.

2024-02-10 13:14:58
이 훅이 두번째 인자로 함수를 받을 수 있도록 구성되어 있는데,
이 때, 인자로 받는 함수의 [결과값] 이 LocalStorage 에 저장되는 것이다.
잘 만들어진 커스텀 훅이다. 잘 보관하고 두고두고 사용하자. 
*/

import { useState, useEffect, Dispatch, SetStateAction } from "react";

type UseLocalStorageReturn<T> = [T, Dispatch<SetStateAction<T>>];

const useLocalStorage = <T,>(
  key: string,
  initialValue: T | (() => T)
): UseLocalStorageReturn<T> => {
  const [value, setValue] = useState<T>(() => {
    const localValue = localStorage.getItem(key);
    if (localValue == null) {
      if (typeof initialValue === "function")
        return (initialValue as () => T)();
      else return initialValue;
    } else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    if (value === "undefined") localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
