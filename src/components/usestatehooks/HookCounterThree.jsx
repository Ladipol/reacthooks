import { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (event) =>
    setName({ ...name, firstName: event.target.value });

  const lastNameHandler = (event) =>
    setName({ ...name, lastName: event.target.value });

  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange={firstNameHandler} />
        <input type="text" value={name.lastName} onChange={lastNameHandler} />
        <h2>Your First name is - {name.firstName}</h2>
        <h2>Your Last name is - {name.lastName}</h2>
      </form>
    </div>
  );
}
export default HookCounterThree;
