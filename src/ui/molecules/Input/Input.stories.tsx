import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "UI/Molecules/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextField: Story = {
  args: {
    label: "Text",
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password",
    type: "password",
  },
};

export const EmailField: Story = {
  args: {
    label: "E-mail",
    type: "email",
  },
};
