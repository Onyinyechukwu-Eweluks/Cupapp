import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardInput: Story = {
  args: {
    title: "Hello",
    color: "blue",
    size: "small",
    width: "100%",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
  },
  argTypes: {
    size: {
      control: "select",
      description: "Overwritten description",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", backgroundColor: "palegoldenrod" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const el = within(canvasElement);
    const btnEl = el.getByText("Click me");

    await userEvent.click(btnEl);
  },
};
