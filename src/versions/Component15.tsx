/*  2024-02-12 06:53:02

input 요소를 toggle 하여 디스플레이를 제어하고,
디스플레이.on 되는 순간 focus 를 주고싶다면?
useCallback 을 사용해서 구현할 수 있다. 

inputRef 의 위치와 호출 흐름을 잘 따라가보면,
input 이 활성화 되는 순간에 inputRef 이 훅업되면서,
inputRef 에 할당된 useCallback() 의 코드가 실행된다. 
매우 중요한 메커니즘 같은데,
HTMLInputElement 등이 제어된 상태였다가 활성화 되면서,
연계된 펑션들의 동작이 필요할 때, 
매우 요긴하게 사용될 수 있을 것 같다. 
*/

import React, { useCallback, useRef, useState } from "react";

const Component15 = () => {
  //   const inputRef = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false);

  // useCallback 의 리턴 펑션을 inputRef 에 보내준다.
  // 여기서 inputRef 는, 이름만 ref 를 갖고 있을 뿐, useRef 에 의해 생성된 ref 가 아니므로, inputRef.current 는 사용할 수 없다.
  const actualInputRef = useRef<HTMLInputElement | null>(null);
  const inputRef = useCallback((input: HTMLInputElement) => {
    if (input !== null) {
      input.focus();
      actualInputRef.current = input;
      actualInputRef.current.value = "미화에게";
    }
  }, []);

  return (
    <>
      <h1>Component15</h1>
      <button onClick={() => setShowInput((s) => !s)}>Toggle</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
};

export default Component15;
