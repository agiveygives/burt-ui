import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { NumberInput, ThemeProvider } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Inputs/NumberInput',
	component: NumberInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	args: {
		label: 'Number Input',
    direction: 'inside',
    placeholder: 'Placeholder',
	}
} as Meta<typeof NumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NumberInput> = (args) => {
  const [value, setValue] = useState<string>('');

  return (
    <ThemeProvider>
      <NumberInput {...args} value={value} onChange={setValue} onBlur={setValue} />
    </ThemeProvider>
  );
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
