import { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const decrementHandler = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrementHandler}>Count {count}</button>
    </div>
  );
}
export default HookCounter;

/* 
"Only Call Hooks at the Top Level", Don't call Hooks inside loops, conditions, or nested functions

"Only Call Hooks from React Functions", Call them from within React functional components and not just any regular JavaScript function.

*/
