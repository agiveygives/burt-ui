import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { TextInput, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Inputs/TextInput',
	component: TextInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	args: {
		label: 'Text Input',
    direction: 'inside',
    placeholder: 'Placeholder',
	}
} as Meta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof TextInput> = (args) => (
  <ThemeProvider>
    <TextInput {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
