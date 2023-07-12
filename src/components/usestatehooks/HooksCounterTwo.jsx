import { useState } from "react";

const HooksCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const resetHandler = () => {
    setCount(initialCount);
  };
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementByFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={resetHandler}>Reset</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementByFiveHandler}>Increment by 5</button>
    </div>
  );
};
export default HooksCounterTwo;
