// carrot: '#e67e22',
// emerald: '#2ecc71',
// concrete: '#95a5a6',
// wisteria: '#8e44ad',
// 'midnight-blue': '#2c3e50'
// clouds: '#ecf0f1'

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

type Props = {
  label: string;
  color?: Colors;
  bgColor?: Colors;
};

export const Button = ({
  label,
  color = "carrot",
  bgColor = "emerald",
}: Props) => {
  return (
    <button style={{ color: colors[color], backgroundColor: colors[bgColor] }}>
      {label}
    </button>
  );
};

// <Button label="Click me!" bgColor="midnight-blue" color="clouds" />
