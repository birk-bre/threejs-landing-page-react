import { Suspense } from "react";
import RenderCanvas from "./RenderCanvas";
import { Typewriter } from "react-simple-typewriter";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const App = () => {
  const words = [
    "Software developer",
    "Full-Stack developer",
    "Creative",
    "Web designer",
  ];
  const { text } = useTypewriter({
    words,
    delaySpeed: 1000,
  });
  return (
    <div className="h-full relative animate-fadein">
      <Suspense>
        <RenderCanvas />
      </Suspense>
      {/* <div className="absolute right-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-6xl font-bold">
          {text}
          <span className="animate-blink">_</span>
        </span>
      </div> */}
    </div>
  );
};

export default App;
