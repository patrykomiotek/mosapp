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

interface Context {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Context>({
  isLogged: false,
  setIsLogged: () => null,
});

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert("Hello!");
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <AuthInfo />
      </AuthContext.Provider>

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
