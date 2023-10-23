import type { Meta, StoryObj } from "@storybook/react";

import { LoginFormWithRefs } from "./LoginFormWithRefs";

const meta = {
  title: "Components/LoginFormWithRefs",
  component: LoginFormWithRefs,
} satisfies Meta<typeof LoginFormWithRefs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _LoginFormWithRefs: Story = {};
