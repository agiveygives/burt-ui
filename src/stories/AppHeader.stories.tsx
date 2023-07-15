import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { AppHeader, ThemeProvider } from 'components';
import DefaultTheme from 'themes';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    logoUri: '/logoipsum-284.svg',
    navLinks: [
      { href: 'javascript:void(0)', display: 'Dashboard' },
      { href: 'javascript:void(0)', display: 'Shop' },
      { href: 'javascript:void(0)', display: 'About Us' },
    ],
  }
} as Meta<typeof AppHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: StoryFn<typeof AppHeader> = (args) => (
  <ThemeProvider>
    <AppHeader {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};