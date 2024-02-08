/*  2024-02-08 07:31:24

Fallback component of ErrorBoundary 

*/

type ChildrenType = {
  children: React.ReactNode;
};

const Fallback = ({ children }: ChildrenType) => {
  return (
    <>
      <h1>Fallback</h1>
      {<h2>Something went wrong</h2>}
      {children}
    </>
  );
};

export default Fallback;
