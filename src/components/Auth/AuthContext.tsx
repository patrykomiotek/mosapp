import { createContext, useContext } from "react";

const initialValue = {
  count: 0,
};

const AuthContext = createContext(initialValue);

const Counter = () => {
  const context = useContext(AuthContext);
  context.count;
};

{
  /* <AuthContext.Provider>


</AuthContext.Provider> */
}
