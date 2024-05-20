import { useState } from "react";
import BackGround from "./components/BackGround";
import LogoHead from "./components/LogoHead";
import NavWork from "./components/NavWork";
import MyService from "./components/MyService";
import Sample from "./components/Sample";
import Work from "./components/Work";
import Reaction from "./components/Reaction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavWork />
      <LogoHead />

      <Work />
      <MyService />
      <Reaction />

      {/*
   <BackGround />
       <Sample />
      

      */}
    </div>
  );
}

export default App;
