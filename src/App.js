import "./App.css";
import React from "react";
import CounterThree from "./components/reducerhooks/CounterThree";
//import ComponentC from "./components/contexthooks/ComponentC";
//import CounterOne from "./components/reducerhooks/CounterOne";
//import CounterTwo from "./components/reducerhooks/CounterTwo";
//import DataFetching from "./components/useeffecthooks/DataFetching";
//import IntervalCounter from "./components/useeffecthooks/IntervalCounter";
//import HookCounterOne from "./components/useeffecthooks/HookCounterOne";
//import HookMouse from "./components/useeffecthooks/HookMouse";
//import MouseContainer from "./components/useeffecthooks/MouseContainer";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HooksCounterTwo from "./components/HooksCounterTwo";
//import HookCounterThree from "./components/HookCounterThree";
//import HookCounterFour from "./components/usestatehooks/HookCounterFour";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <h1>React useState hooks</h1> */}
      {/* <ClassCounter />
      <HookCounter /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Ladipo"}>
        <ChannelContext.Provider value={"Glorytech"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      <CounterThree />
    </div>
  );
}

export default App;
