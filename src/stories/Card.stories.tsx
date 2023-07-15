import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Title, Subtitle, Description, Controls } from '@storybook/blocks';

import { Card, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    title: 'Card Title',
  },
} as Meta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: StoryFn<typeof Card> = (args) => (
  <ThemeProvider>
    <Card {...args}>
      <p>Content</p>
    </Card>
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};