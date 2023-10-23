// import React from 'react';
import { Text } from "./ui/Text";
import { Button } from "./ui/Button";

import "./App.css";
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Generator } from "./components/Generator";
import { LoginFormWithState } from "./components/LoginFormWithState";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { AuthContextProvider } from "./components/Auth/AuthContext";

function App() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert("Hello!");
  };

  return (
    <div className="App">
      <AuthContextProvider>
        <AuthInfo />
      </AuthContextProvider>

      {/* <AuthInfo /> */}

      {/* <LoginFormWithState /> */}
      {/* <Generator /> */}

      {/* <Text>Today is monday</Text> */}
      {/* <Button
        label="Click me!"
        onClick={handleClick}
        bgColor="midnight-blue"
        color="clouds"
        type="submit"
      /> */}
      {/* <button onClick={handleClick}></button> */}
      {/* <p onClick={handleClick}>Hej</p> */}
    </div>
  );
}

export default App;
