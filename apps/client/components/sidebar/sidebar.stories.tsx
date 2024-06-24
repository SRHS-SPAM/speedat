import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "./sidebar";

const meta = {
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
