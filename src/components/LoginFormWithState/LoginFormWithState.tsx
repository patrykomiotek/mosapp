import { useState } from "react";

export const LoginFormWithState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <p>
        E-mail: {email}, password: {password}
      </p>
      <div>
        <label>E-mail</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label>Language</label>
        <input type="text" />
      </div>
      <button type="submit">Send</button>
    </div>
  );
};
