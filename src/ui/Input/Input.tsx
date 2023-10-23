import { useId, forwardRef, Ref, ComponentPropsWithRef } from "react";

type Props = {
  label: string;
};

export const Input = forwardRef(
  (
    { label, ...rest }: ComponentPropsWithRef<"input"> & Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...rest} />
      </div>
    );
  }
);
