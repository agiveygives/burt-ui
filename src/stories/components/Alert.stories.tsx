// import React from 'react';
// import { StoryFn, Meta } from '@storybook/react';

// import { Alert } from 'components/Alert';
// import DefaultTheme from 'themes';
// import ThemeProvider from 'components/ThemeProvider';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Components/Alert',
//   component: Alert,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {},
//   args: {
//     variant: 'error',
//     dismissable: true,
//     dismissDirection: 'right',
//     theme: DefaultTheme,
//   }
// } as Meta<typeof Alert>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// // @ts-ignore
// const Template: StoryFn<typeof Alert> = (args) => <ThemeProvider theme={args.theme}>
//   <Alert {...args}>
//     <div>Here be an Alert!</div>
//   </Alert>
// </ThemeProvider>;

// export const Default = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Default.args = {};