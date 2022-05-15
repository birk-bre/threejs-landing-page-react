import { Suspense } from "react";
import RenderCanvas from "./RenderCanvas";

const App = () => {
  return (
    <div className="h-full relative animate-fadein">
      <Suspense>
        <RenderCanvas />
      </Suspense>
      <div className="absolute right-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-fit">
        <span className="text-6xl font-bold my-0 mx-auto overflow-hidden whitespace-nowrap items-end flex animate-typing">
          Hello world<span className="animate-blink text-5xl">_</span>
        </span>
      </div>
    </div>
  );
};

export default App;
