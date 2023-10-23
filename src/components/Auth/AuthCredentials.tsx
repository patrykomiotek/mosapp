import { useContext } from "react";
import { Text } from "../../ui";
import { AuthContext } from "../../App";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <Text>AuthCredentials component</Text>
      User is logged in: {context.isLogged ? "YES" : "NO"}
    </div>
  );
};
