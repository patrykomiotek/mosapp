import { Text } from "../../ui";
import { useAuthContext } from "../Auth/AuthContext";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <div>
      <Text>AuthCredentials component</Text>
      User is logged in: {context.isLogged ? "YES" : "NO"}
      <button onClick={() => context.toggleUser()}>Toggle</button>
    </div>
  );
};
