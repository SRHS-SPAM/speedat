import type { Meta, StoryObj } from "@storybook/react";

import Header from "./header";

const meta = {
  component: Header,
  args: {
    isDark: false,
    isLog: false,
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
