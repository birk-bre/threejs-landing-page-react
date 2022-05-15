import { Suspense } from "react";
import React from "react ";
const App = () => {
  const RenderCanvas = React.lazy(() => import("./RenderCanvas"));
  return (
    <div className="h-full relative">
      <div className="z-10 absolute right-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-fit">
        <span
          style={{
            animation: "typing 1.5s steps(15, end) 2s forwards",
          }}
          className="w-0 text-6xl font-bold my-0 mx-auto overflow-hidden whitespace-nowrap items-end flex animate-typing"
        >
          Hello world<span className=" animate-blink text-5xl">_</span>
        </span>
      </div>
      <Suspense fallback={null}>
        <div className="animate-fadein h-full">
          <RenderCanvas count={window.innerWidth / 5 + 50} />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
