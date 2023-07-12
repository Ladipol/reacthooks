import { useEffect, useState } from "react";

const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    function doSomething() {
      console.log("someprop");
    }
    doSomething();
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};
export default IntervalCounter;
