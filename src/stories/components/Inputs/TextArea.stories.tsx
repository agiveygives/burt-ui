import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { TextArea, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Inputs/TextArea',
	component: TextArea,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	args: {
		label: 'Text Area Input',
    direction: 'inside',
    placeholder: 'Placeholder',
	}
} as Meta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof TextArea> = (args) => (
  <ThemeProvider>
    <TextArea {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
