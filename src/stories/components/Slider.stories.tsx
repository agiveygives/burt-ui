import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Slider, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Slider',
	component: Slider,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	args: {
		label: 'Slider Label',
    values: ['1', '2', '3', '4', '5'],
	},
} as Meta<typeof Slider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: StoryFn<typeof Slider> = (args) => (
	<ThemeProvider>
		<Slider {...args} />
	</ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};