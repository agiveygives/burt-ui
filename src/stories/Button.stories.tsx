import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Button from 'components/Button';
import DefaultTheme from 'themes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    children: 'Button',
    theme: DefaultTheme,
  }
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args}>{args.children}</ Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variation: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variation: 'ghost',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Hard = Template.bind({});
Hard.args = {
  rounded: 'hard',
};

export const Soft = Template.bind({});
Soft.args = {
  rounded: 'soft',
};
