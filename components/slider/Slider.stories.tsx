import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Slider, { SliderProps } from "./Slider";

export default {
  title: "Common/Slider",
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Partial = Template.bind({});
Partial.args = {
  value: 20,
  max: 30,
};

export const Full = Template.bind({});
Full.args = {
  value: 100,
  max: 100,
};

export const Empty = Template.bind({});
Empty.args = {
  value: 0,
  max: 9000,
};
