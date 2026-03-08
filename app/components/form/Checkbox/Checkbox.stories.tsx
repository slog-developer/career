import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: "I confirm the above information",
    error: "You must check this box to proceed",
  },
};

export const Disabled: Story = {
  args: {
    label: "Not available",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Already selected",
    disabled: true,
    defaultChecked: true,
  },
};
