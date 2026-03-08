import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Form/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "john@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    defaultValue: "invalid user",
    error: "Username is already taken",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    helperText: "Must be at least 8 characters.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Amount",
    value: "100",
    disabled: true,
  },
};
