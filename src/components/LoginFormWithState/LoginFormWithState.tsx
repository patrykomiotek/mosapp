import { ChangeEventHandler, useState } from "react";

interface FormState {
  email: string;
  password: string;
  language: string;
}

export const LoginFormWithState = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    language: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    // structuredClone
    setFormState({
      ...formState,
      [id]: id === "language" && value === "js" ? "***" : value,
    });
  };

  return (
    <div>
      <p>
        E-mail: {formState.email}, password: {formState.password}
      </p>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          onBlur={handleChange}
          value={formState.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={formState.password}
        />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          id="language"
          type="text"
          onChange={handleChange}
          value={formState.language}
        />
      </div>
      <button type="submit">Send</button>
    </div>
  );
};
