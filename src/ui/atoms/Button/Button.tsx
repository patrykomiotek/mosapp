// carrot: '#e67e22',
// emerald: '#2ecc71',
// concrete: '#95a5a6',
// wisteria: '#8e44ad',
// 'midnight-blue': '#2c3e50'
// clouds: '#ecf0f1'

// import { MouseEventHandler, ComponentProps } from "react";
import { ComponentProps } from "react";

const colors = {
  carrot: "#e67e22",
  emerald: "#2ecc71",
  concrete: "#95a5a6",
  wisteria: "#8e44ad",
  "midnight-blue": "#2c3e50",
  clouds: "#ecf0f1",
};

// enum Colors {
//   carrot = '#e67e22'
// } // Colors.
// type ColorsFromEnum = keyof typeof Colors;

type Colors = keyof typeof colors;

type Props = Readonly<{
  label: string;
  color?: Colors;
  bgColor?: Colors;
  // onClick?: () => void;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

// Readonly
// Partial
// Required
// type RequiredProps = Required<Props>

// Pick<>
// Omit<>

export const Button = ({
  label,
  onClick,
  color = "carrot",
  bgColor = "emerald",
  ...rest
}: Pick<ComponentProps<"button">, "type" | "value" | "onClick"> & Props) => {
  return (
    <button
      style={{ color: colors[color], backgroundColor: colors[bgColor] }}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

// <Button label="Click me!" bgColor="midnight-blue" color="clouds" />
