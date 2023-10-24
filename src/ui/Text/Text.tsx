// function Text() {

// }

type Props = {
  // children: React.ReactNode
  children: string | string[] | null; // React specific
};

// export const Text = (props: Props) => {
//   return <p>{props.children}</p>;
// };

export const Text = ({ children }: Props) => {
  return <p>{children}</p>;
};

// <Text>Today is payday</Text>
