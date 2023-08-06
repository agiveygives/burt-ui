import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Button, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	args: {
		children: 'Button',
		type: 'primary',
		variant: 'filled',
		shape: 'rounded',
		raised: true,
	}
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => (
	<ThemeProvider>
		<Button {...args}>{args.children}</ Button>
	</ThemeProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};

export const IconButton = Template.bind({});
IconButton.args = {
	icon: (<div>X</div>),
}
