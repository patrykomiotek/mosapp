import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// 1. Create context
// 2. create and export provider
// 3. create custom hook which will check if context is set

interface AuthContextType {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

const initialValue: AuthContextType = {
  isLogged: false,
  setIsLogged: () => null,
};

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

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
