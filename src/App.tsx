// import React from 'react';
import { Text } from "./ui/Text";
import { Button } from "./ui/Button";

import "./App.css";
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";
import { Generator } from "./components/Generator";
import { LoginFormWithState } from "./components/LoginFormWithState";
import { AuthInfo } from "./components/Auth/AuthInfo";
import { AuthContextProvider } from "./components/Auth/AuthContext";
import { ThemeSwitcher } from "./components/Theme/ThemeSwitcher";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { MagicButton } from "./ui/MagicButton";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert("Hello!");
  };

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
      buttonRef.current.style.color = "white";
    }
  };

  return (
    <div className="App">
      <ThemeProvider>
        <ThemeSwitcher />
        <AuthContextProvider>
          <AuthInfo />
          <MagicButton ref={buttonRef} onMouseEnter={handleMouseEnter} />
        </AuthContextProvider>
      </ThemeProvider>

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
