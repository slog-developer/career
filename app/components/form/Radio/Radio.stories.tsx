import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Option A",
    name: "demo-radio",
    value: "a",
  },
};

export const Checked: Story = {
  args: {
    label: "Option B",
    name: "demo-radio",
    value: "b",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked Option",
    disabled: true,
    defaultChecked: true,
  },
};
