import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Click me",
  },
};

export const Gray: Story = {
  args: {
    label: "Click me",
    color: "clouds",
    bgColor: "midnight-blue",
  },
};

export const Carrot: Story = {
  args: {
    label: "Click me",
    color: "clouds",
    bgColor: "carrot",
  },
};
