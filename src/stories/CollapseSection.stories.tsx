import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import CollapseSection from 'components/CollapseSection';
import DefaultTheme from 'themes';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Components/CollapseSection',
  component: CollapseSection,
  args: {
    theme: DefaultTheme,
    children: <ol>
      <li>Burt</li>
      <li>Marge</li>
      <li>Maverick</li>
      <li>Daisy</li>
      <li>Mowgli</li>
      <li>Rose</li>
      <li>Millie</li>
    </ol>,
    headerText: 'Favorite Pets List',
  }
} as Meta<typeof CollapseSection>;

// @ts-ignore
const Template: StoryFn<typeof CollapseSection> = (args) => <ThemeProvider theme={args.theme}>
  <CollapseSection {...args}>
    {args.children}
  </CollapseSection>
</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {};