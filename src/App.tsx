// import React from 'react';
import { Text } from "./ui/Text";
import { Button } from "./ui/Button";

import "./App.css";
import { MouseEventHandler, createContext } from "react";
import { Generator } from "./components/Generator";
import { LoginFormWithState } from "./components/LoginFormWithState";
import { AuthInfo } from "./components/Auth/AuthInfo";

interface Context {
  isLogged: boolean;
}

export const AuthContext = createContext<Context>({ isLogged: false });

function App() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert("Hello!");
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLogged: true }}>
        <AuthInfo />
      </AuthContext.Provider>

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
