import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { LabeledContainer, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/LabeledContainer',
	component: LabeledContainer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	args: {
		label: 'Container Label',
	},
} as Meta<typeof LabeledContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: StoryFn<typeof LabeledContainer> = (args) => (
	<ThemeProvider>
		<LabeledContainer {...args}>
			<p>Content</p>
		</LabeledContainer>
	</ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};