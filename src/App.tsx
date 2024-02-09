/*

*/
// import Component02 from "./versions/Component02";
// import Component03 from "./versions/Component03";
// import Component04 from "./versions/Component04";
// import Component06 from "./versions/Component06";
// import Component07 from "./versions/Component07";
// import Component08 from "./versions/Component08";
// import Component09 from "./versions/Component09";
import Component09_Kyle from "./versions/Component09_Kyle";

import "./css/styles.css";
import { ErrorBoundary06 } from "./versions/components/ErrorBoundary06";
import Fallback from "./versions/components/Fallback";

function App() {
  return (
    <>
      <ErrorBoundary06
        fallback={
          <Fallback>
            <p>{/* custom content */}</p>
          </Fallback>
        }
      >
        <Component09_Kyle />
      </ErrorBoundary06>
    </>
  );
}

export default App;
