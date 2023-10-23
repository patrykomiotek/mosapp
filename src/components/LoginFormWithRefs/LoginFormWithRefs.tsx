import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

interface FormState {
  email: string;
  password: string;
  language: string;
}

export const LoginFormWithRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    // console.log(formState);

    const email = emailFieldRef.current?.value;
    const password = passwordFieldRef.current?.value;
    const language = languageFieldRef.current?.value;

    console.log({ email, password, language });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    // event.target.value
    // emailFieldRef.current?.value
    const emailField = emailFieldRef.current;
    if (emailField && emailField.value.includes("kura")) {
      emailField.style.border = "#f00 2px solid";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>E-mail: {emailFieldRef.current?.value}</p>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          ref={emailFieldRef}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" ref={passwordFieldRef} type="password" />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input id="language" ref={languageFieldRef} type="text" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
