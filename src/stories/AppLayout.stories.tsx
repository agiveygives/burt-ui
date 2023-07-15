import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Title, Subtitle, Description, Controls } from '@storybook/blocks';

import { AppLayout, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AppLayout',
  component: AppLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    header: {
      logoUri: '/logoipsum-284.svg',
      navLinks: [
        { href: 'javascript:void(0)', display: 'Dashboard' },
        { href: 'javascript:void(0)', display: 'Shop' },
        { href: 'javascript:void(0)', display: 'About Us' },
      ],
    },
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
} as Meta<typeof AppLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: StoryFn<typeof AppHeader> = (args) => (
  <ThemeProvider>
    <AppLayout {...args}>
      <p>Content</p>
    </AppLayout>
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};