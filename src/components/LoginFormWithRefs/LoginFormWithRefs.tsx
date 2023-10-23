import {
  ChangeEventHandler,
  FormEventHandler,
  useRef,
  useState,
  useEffect,
} from "react";
import { Input } from "../../ui/Input";

interface FormState {
  email: string;
  password: string;
  language: string;
}

export const LoginFormWithRefs = () => {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const languageFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailFieldRef.current?.focus();
  });

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
      <Input ref={emailFieldRef} label="E-mail" type="email" />
      <Input ref={passwordFieldRef} label="Password" type="password" />
      <Input ref={languageFieldRef} label="Language" />
      <button type="submit">Send</button>
    </form>
  );
};
