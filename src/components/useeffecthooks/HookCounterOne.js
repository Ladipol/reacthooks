import { useState, useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button className="btn" onClick={handleCount}>
        Clicked {count} times.
      </button>
    </div>
  );
};
export default HookCounterOne;
