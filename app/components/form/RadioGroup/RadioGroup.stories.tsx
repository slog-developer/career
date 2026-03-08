import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState, ComponentProps } from "react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio/Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Form/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Storybook UI에서 children을 직접 넘길 수 없으므로 무시
  argTypes: {
    children: { table: { disable: true } },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupTemplate = (args: ComponentProps<typeof RadioGroup>) => {
  const [value, setValue] = useState(args.value);
  return (
    <RadioGroup {...args} value={value} onChange={setValue}>
      <Radio label="Apple" value="apple" />
      <Radio label="Banana" value="banana" />
      <Radio label="Orange" value="orange" />
    </RadioGroup>
  );
};

export const Default: Story = {
  render: RadioGroupTemplate,
  args: {
    name: "fruits",
    label: "Select your favorite fruit",
    direction: "column",
    value: "apple",
  },
};

export const Horizontal: Story = {
  render: RadioGroupTemplate,
  args: {
    name: "fruits-horizontal",
    label: "Select your favorite fruit",
    direction: "row",
    value: "banana",
  },
};
