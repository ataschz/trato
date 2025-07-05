module.exports = {
	'*': 'pnpm format',
	'!(.)*/**/*.(ts|tsx|js|jsx)': () => 'pnpm lint',
};
