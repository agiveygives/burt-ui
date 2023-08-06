const colors = {
	caribbeanCurrent: '#156064',
	mint: '#00c49a',
	naplesYellow: '#f8e16c',
	melon: '#ffc2b4',
	coral: '#fb8f67',
	white: '#f2f2f2',
	mediumPurple: '#9370DB',
	black: '#0e0e0e',
};

const tokens = {
	primary: colors.mint,
	secondary: colors.naplesYellow,
	danger: colors.coral,
};

const defaultTheme =  {
	'--primary': tokens.primary,
	'--secondary': tokens.secondary,
	'--danger': tokens.primary,

	/* Alert Variables */
	'--alert--error--background-color': `${colors.coral}aa`,
	'--alert--error--border-color': colors.coral,
	'--alert--warning--background-color': `${colors.naplesYellow}aa`,
	'--alert--warning--border-color': colors.naplesYellow,
	'--alert--info--background-color': `${colors.mediumPurple}aa`,
	'--alert--info--border-color': colors.mediumPurple,

	/* Button Variables */
	'--button--primary--background-color': tokens.primary,
	'--button--primary--border-color': tokens.primary,
	'--button--primary--color': colors.black,
	'--button--secondary--background-color': tokens.secondary,
	'--button--secondary--border-color': tokens.secondary,
	'--button--secondary--color': colors.black,
	'--button--danger--background-color': tokens.danger,
	'--button--danger--border-color': tokens.danger,
	'--button--danger--color': colors.black,

	/* Card Variables */
	'--card--background-color': colors.white,
	'--card--color': colors.caribbeanCurrent,
	'--card--padding': '15px',

	/* Header Variables */
	'--header-background': colors.white,
	'--header-background-scroll': colors.mint,
	'--header-text-color': colors.mint,
	'--header-text-color-scroll': colors.white,
	'--header-height': '60px',
	'--header-padding-top': '10px',
	'--header-padding-right': '24px',
	'--header-padding-bottom': '10px',
	'--header-padding-left': '24px',
	'--header-logo-width': '40px',

	/* switch variables */
	'--switch--checked--background-color': colors.mint,
};

export default defaultTheme;
