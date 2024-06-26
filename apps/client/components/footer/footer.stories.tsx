import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./footer";

const meta = {
  component: Footer,
  args: {
    isDark: false,
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
