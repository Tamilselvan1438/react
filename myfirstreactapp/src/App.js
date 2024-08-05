//import logo from './logo.svg';
import React from "react";
import Button from "./button/button.tsx";
import Counter from "./counter/count.jsx";
import Input from "./input/input.tsx";
import Accordion from "./accordion/accordion.js";
// import Dropdown from "./dropdown/dropdown.jsx";
import Dropdown from "./dropdown/dropdown.js";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Button type='big' disable={true} /> */}
      {/* <Input/> */}
      {/* <Accordion /> */}
      <Dropdown />
    </>
  );
}

export default App;
