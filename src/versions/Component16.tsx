/*  2024-02-12 08:24:10


1. Make API fetch and retrieve data
2. add fetched data to the body
3. Add intersectionObserver trigger to the fetched data tail
4. Add useCallback trojan to the ref which placed in the data tail.

문제는..
fetch 해온 data 를 ... append 하는 방식인데..
JS 방식으로 append 해주는 게 맞을 것 같은데, react 에서는 사용되지 않는 방식인 듯..
setAllTodos([...allTodos, { id: todoId, finished: false, todo: newTodo }]);
이런 식으로 처리하는 방법만 배웠는데..
데이터가 많아질 수록 메모리 관리에 문제가 있을 것 같다. 
React.appendChild 를 찾아봐야겠다. 

우선은 
setAllTodos([...allTodos, { id: todoId, finished: false, todo: newTodo }]);
이 방식으로 처리하는 것으로 먼저 시작해보자. 

2024-02-14 11:00:38
setAllTodos 방식의 문제점... 
1. 1번 페이지의 컨텐츠가 언제나 최하단으로 고정된다.. --> concat 의 순서를 바꿔서 해결함

2024-02-14 11:07:18
setAllTodos 방식 + 버튼 액션 작동 완료..
이제는, IntersectionObserver 를 추가해보자.

fetchData 를 출력에 넣어주는 부분.. 마지막 요소에, observerClass 를 추가해주고,
observerClass 에 intersectionObserver 를 연결해줘 보자. 

2024-02-14 16:02:51
내 버전에서 중요한 기억해야 할 것들..

  1. 이 펑션으로, 다이내믹 생성된 #observerClass 를 매번 새로 찾을 수 있다.
  const triggerRef = useCallback(() => {
    const observerTarget = document.querySelector("#observerClass");
    return observerTarget;
  }, []);

  2. 옵저버타겟을 찾는 이 방법...
     useCallback 으로, 새롭게 리젠된 DOM 중에서 타겟을 찾는다.
  const observerTarget = triggerRef?.() as Element | null;
  observerTarget && observer.observe(observerTarget);

Data.Json:
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://placehold.co/600/92c952/ddd",
    "thumbnailUrl": "https://placehold.co/150/92c952/ddd"
  },

*/

import React, { useCallback, useState } from "react";

import "../css/infinite_scroll.css";
import axios from "axios";
import GridComponent16 from "./components/GridComponent16";

export type FetchDataType = {
  albumId?: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const fetchLimit = 10;
const initFetchUrl = `http://127.0.0.1:3000/photos-short-list?_page=1&_limit=${fetchLimit}`;
let fetchPage = initFetchUrl;
let responseNextPage = "";
let endOfData = false;

const Component16 = () => {
  const [imageData, setImageData] = useState<FetchDataType[]>([]);

  // 이 펑션으로, 다이내믹 생성된 #observerClass 를 매번 새로 찾을 수 있다.
  const triggerRef = useCallback(() => {
    const observerTarget = document.querySelector("#observerClass");
    return observerTarget;
  }, []);

  // fetch function
  const fetchData = async () => {
    if (responseNextPage) fetchPage = responseNextPage;
    console.log("Fetching", fetchPage);
    if (fetchPage && !endOfData) {
      await axios
        .get(fetchPage)
        .then((response) => {
          if (response == null) return;
          const linkHeader = response?.headers["link"] ?? null;
          const parsedLinks2 = parsedLinkHeaderTest(linkHeader);
          console.log(parsedLinks2["next"]);
          responseNextPage = parsedLinks2["next"];
          if (responseNextPage === undefined) endOfData = true;

          const data = response.data;
          console.log(data);
          Array.isArray(data) &&
            setImageData((prevImageData) =>
              prevImageData.concat(
                data.map((item: FetchDataType) => ({
                  id: Number(item.id),
                  title: item.title,
                  url: item.url,
                  thumbnailUrl: item.thumbnailUrl,
                }))
              )
            );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h1>Component16</h1>
      <GridComponent16
        imageData={imageData}
        fetchData={fetchData}
        triggerRef={triggerRef}
      />
      <button onClick={fetchData}>fetch</button>
      <br />
      <br />
      <br />
    </>
  );
};

export default Component16;

/*
  This function takes in fetch request's `res.headers.get('Link')` value and converts it to an object with each link type as a key and the url as the value. The only value that we care about for this project is the `next` link, which we will use to fetch the next page of data (if it exists).
*/
type ParsedLinksType = {
  [key: string]: string;
};
export function parseLinkHeader(linkHeader: string | null) {
  if (!linkHeader) return {};
  const links = linkHeader.split(",");
  const parsedLinks: ParsedLinksType = {};
  links.forEach((link: string) => {
    if (link == null || link === undefined) return;
    const urlMatch = link.match(/<(.*)>/)![1];
    const relMatch = link.match(/rel="(.*)"/)![1];
    if (urlMatch && relMatch) {
      const url = urlMatch[1];
      const rel = relMatch[1];
      parsedLinks[rel] = url;
    }
  });
  return parsedLinks;
}

/*
<http://127.0.0.1:3000/photos-short-list?_page=1&_limit=4>; rel=\"first\", <http://127.0.0.1:3000/photos-short-list?_page=2&_limit=4>; rel=\"next\", <http://127.0.0.1:3000/photos-short-list?_page=25&_limit=4>; rel=\"last\"
*/
export function parsedLinkHeaderTest(
  linkHeader: string | null
): Record<string, string> {
  const parsedLinks: Record<string, string> = {};

  if (!linkHeader) return parsedLinks;

  const linkMatches = linkHeader.match(/<([^>]+)>; rel="([^"]+)"/g);

  if (linkMatches) {
    linkMatches.forEach((match) => {
      const [, url, rel] = match.match(/<([^>]+)>; rel="([^"]+)"/) || [];
      if (url && rel) {
        parsedLinks[rel] = url;
      }
    });
  }

  return parsedLinks;
}
