import { Suspense } from "react";
import React from "react ";
import Typewriter from "typewriter-effect";

const App = () => {
  const RenderCanvas = React.lazy(() => import("./RenderCanvas"));
  return (
    <div className="h-screen w-screen relative">
      <div className="z-10 absolute right-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-fit">
        <span className="lg:text-6xl text-4xl font-extrabold w-full break-words">
          <Typewriter
            options={{
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .typeString("consle")
                .pauseFor(200)
                .deleteChars(3)
                .typeString('sole.log("helo')
                .pauseFor(200)
                .deleteChars(1)
                .typeString('lo world");')
                .start();
            }}
          />
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
