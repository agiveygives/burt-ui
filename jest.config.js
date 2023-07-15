/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.css$': ['jest-transform-css', { modules: true }]
	},
	testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '!**/types/**/*'],
};