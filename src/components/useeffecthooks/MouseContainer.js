import { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <button onClick={handleDisplay}>Toggle display</button>
      {display && <HookMouse></HookMouse>}
    </div>
  );
};
export default MouseContainer;
