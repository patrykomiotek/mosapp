import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useEffect,
  useRef,
} from "react";

interface FormState {
  email: string;
  password: string;
  language: string;
}

export const LoginFormWithState = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    language: "",
  });
  const [emailError, setEmailError] = useState(true);

  useEffect(() => {
    // mount & update
    console.log("mount and/or update");
    emailFieldRef.current?.focus();

    return () => {
      // unmount
      console.log("unmount");
    };
  }, []); // [] - only mount

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    // structuredClone
    setFormState({
      ...formState,
      [id]: id === "language" && value === "js" ? "***" : value,
    });
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(formState);
    if (!formState.email.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        E-mail: {formState.email}, password: {formState.password}
      </p>
      <p>E-mail {emailError ? "is invalid" : "is valid"}</p>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          ref={emailFieldRef}
          // type="email"
          type="text"
          onChange={handleChange}
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
      <button type="submit">Submit</button>
    </form>
  );
};
