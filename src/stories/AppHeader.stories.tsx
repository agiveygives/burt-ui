import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Title, Subtitle, Description, Controls } from '@storybook/blocks';

import { AppHeader, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    logoUri: 'https://cdn.discordapp.com/avatars/313842639084584971/6cd4851ad3f0e86d346ca7132c24a032.webp?size=160',
    navLinks: [
      { href: 'javascript:void(0)', display: 'Dashboard' },
      { href: 'javascript:void(0)', display: 'Shop' },
      { href: 'javascript:void(0)', display: 'About Us' },
    ],
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
        </>
      ),
    },
  },
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