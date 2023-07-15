import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { ThemeProvider, Select } from 'components';
import DefaultTheme from 'themes';

export default {
	title: 'Components/Select',
	component: Select,
	argTypes: {},
	args: {
		theme: DefaultTheme,
		variation: 'secondary',
		isDisabled: false,
		rounded: 'hard',
		inputSize: 'medium',
		placeholder: 'Pick a pet',
		options: [
			{ value: 'burt', display: 'Burt' },
			{ value: 'daisy', display: 'Daisy' },
			{ value: 'rose', display: 'Rose' },
			{ value: 'marge', display: 'Marge' },
			{ value: 'maverick', display: 'Maverick' },
			{ value: 'millie', display: 'Millie' },
			{ value: 'mowgli', display: 'Mowgli' },
		],
	}
} as Meta<typeof Select>;

// @ts-ignore
const Template: StoryFn<typeof Select> = (args) => <ThemeProvider theme={args.theme}><Select {...args} /></ThemeProvider>;

export const Native = Template.bind({});
Native.args = {
	type: 'native',
};