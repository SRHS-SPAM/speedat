import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "./sidebar";

const meta = {
  title: "Main/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  args: {
    isDark: false,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
