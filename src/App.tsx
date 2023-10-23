// import React from 'react';
import { Text } from "./ui/Text";
import { Button } from "./ui/Button";

import "./App.css";
import { MouseEventHandler } from "react";
import { Generator } from "./components/Generator";
import { LoginFormWithState } from "./components/LoginFormWithState";

function App() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert("Hello!");
  };

  return (
    <div className="App">
      <LoginFormWithState />
      <Generator />

      <Text>Today is monday</Text>
      <Button
        label="Click me!"
        onClick={handleClick}
        bgColor="midnight-blue"
        color="clouds"
        type="submit"
      />
      {/* <button onClick={handleClick}></button> */}
      {/* <p onClick={handleClick}>Hej</p> */}
    </div>
  );
}

export default App;
