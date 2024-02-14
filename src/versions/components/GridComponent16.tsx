/*  2024-02-12 12:34:35

useCallback 이, 렌더링 될 때마다 새로 선언되므로, 
이 태스크에 맞겠다.
useEffect 가 아니라 ref = useCallback 으로 다시 해보자. 

*/

import { useEffect } from "react";
import { FetchDataType } from "../Component16";

type TriggerRefType = () => Element | null;
type GridComponent16Type = {
  imageData: FetchDataType[];
  fetchData: () => void;
  triggerRef?: TriggerRefType;
};

const GridComponent16 = ({
  imageData,
  fetchData,
  triggerRef,
}: GridComponent16Type) => {
  // const triggerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("IntersectionObserver Triggered..");
            fetchData();
          }
        });
      },
      { threshold: 0.5 }
    );

    // 옵저버타겟을 찾는 이 방법...
    // useCallback 으로, 새롭게 리젠된 DOM 중에서 타겟을 찾는다.
    const observerTarget = triggerRef?.() as Element | null;
    observerTarget && observer.observe(observerTarget);

    return () => {
      observerTarget && observer.unobserve(observerTarget);
    };
  }, [triggerRef, fetchData]);

  return (
    <>
      <div>GridComponent16</div>
      <div className="grid">
        {imageData.length > 0 &&
          imageData.map((data, i) => {
            return (
              <img
                src={data.url}
                key={data.id}
                id={i === imageData.length - 1 ? "observerClass" : ""}
              />
            );
          })}
      </div>
    </>
  );
};

export default GridComponent16;
