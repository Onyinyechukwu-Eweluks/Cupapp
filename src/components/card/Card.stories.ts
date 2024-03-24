import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardInput: Story = {
  args: {
    title: "Hello",
    color: "blue",
    size: "20px",
    children: 3,
  },
};
