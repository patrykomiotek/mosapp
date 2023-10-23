import type { Meta, StoryObj } from "@storybook/react";

import { LoginFormWithState } from "./LoginFormWithState";

const meta = {
  title: "Components/LoginFormWithState",
  component: LoginFormWithState,
} satisfies Meta<typeof LoginFormWithState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _LoginFormWithState: Story = {};
