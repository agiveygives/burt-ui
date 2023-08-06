/* https://i.redd.it/kc1uyz4qowx61.png */

const colors = {
	brillianceRed: '#F47B67',
	hyperSquadYellow: '#F8A532',
	bugHuntGreen: '#48B784',
	balanceCyan: '45DDC0',
	greyple: '#99AAB5',
	notQuiteBlack: '#23272A1',
	nitroGrey: 'B7C2CE',
	partnerBlue: '#4187ED',
	darkModeGrey: '#36393F',
	developerBlue: '#3E70DD',
	nitroBlue: '#4F5D7F',
	blurple: '#7289DA',
	darkBlurple: '#4E5D94',
	braveryPurple: '#9C84EF',
	boostPink: 'F47FFF',
	fullWhite: '#FFFFFF',
};

const discordTheme = {
	/* Alert Variables */
	'--alert--error--background-color': `${colors.brillianceRed}aa`,
	'--alert--error--border-color': colors.brillianceRed,
	'--alert--warning--background-color': `${colors.hyperSquadYellow}aa`,
	'--alert--warning--border-color': colors.hyperSquadYellow,
	'--alert--info--background-color': `${colors.braveryPurple}aa`,
	'--alert--info--border-color': colors.braveryPurple,


	/* Button Variables */
	'--button--primary--background-color': colors.blurple,
	'--button--primary--border-color': colors.blurple,
	'--button--primary--color': colors.fullWhite,
	'--button--secondary--background-color': colors.greyple,
	'--button--secondary--border-color': colors.greyple,
	'--button--secondary--color': colors.notQuiteBlack,
	'--button--danger--background-color': colors.brillianceRed,
	'--button--danger--border-color': colors.brillianceRed,
	'--button--danger--color': colors.notQuiteBlack,

	/* card variables */
	'--card--background-color': colors.darkModeGrey,
	'--card--color': colors.fullWhite,
	'--card--padding': '15px',

	/* footer variables */
	'--footer--background-color': 'black',
	'--footer--color': colors.fullWhite,

	/* header variables */
	'--header-background': colors.blurple,
	'--header-background-scroll': colors.blurple,
	'--header-height': '64px',
	'--header-padding-top': '10px',
	'--header-padding-right': '24px',
	'--header-padding-bottom': '10px',
	'--header-padding-left': '24px',
	'--header-logo-width': '40px',

	/* input */
	'--input--background-color': colors.darkBlurple,
	'--input--color': colors.fullWhite,

	/* section header variables */
	'--section-header--background-color': colors.blurple,
	'--section-header--color': colors.darkModeGrey,

	/* switch variables */
	'--switch--checked--background-color': colors.blurple,
};

export default discordTheme;
