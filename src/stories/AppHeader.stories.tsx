import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import AppHeader from 'components/AppHeader';
import DefaultTheme from 'themes';
import { ThemeProvider } from 'styled-components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    theme: DefaultTheme,
    logoSrc: '/logoipsum-284.svg',
    navItems: [
      { to: 'javascript:void(0)', display: 'Dashboard' },
      { to: 'javascript:void(0)', display: 'Shop' },
      { to: 'javascript:void(0)', display: 'About Us' },
    ],
  }
} as Meta<typeof AppHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: StoryFn<typeof AppHeader> = (args) => <ThemeProvider theme={args.theme}><AppHeader {...args} /></ThemeProvider>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};