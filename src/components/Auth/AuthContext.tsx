import { createContext, useContext, useState } from "react";

// 1. Create context
// 2. create and export provider
// 3. create custom hook which will check if context is set
// React Context Hook Pattern

interface AuthContextType {
  isLogged: boolean;
  loginUser: Function;
  logoutUser: Function;
  toggleUser: Function;
}

// const initialValue: AuthContextType = {
//   isLogged: false,
//   setIsLogged: () => null,
// };

const AuthContext = createContext<AuthContextType | null>(null);

// useAuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error(
    "Oh no! Component should be placed inside AuthContextProvider"
  );
};

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const loginUser = () => setIsLogged(true);
  const logoutUser = () => setIsLogged(false);
  const toggleUser = () => setIsLogged((value) => !value);

  return { isLogged, loginUser, logoutUser, toggleUser };
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
