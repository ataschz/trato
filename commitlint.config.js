const COMMIT_REGEX = /^(fix|feat|refactor|chore): [\w\s-]+$/;

module.exports = {
	plugins: ['commitlint-plugin-regex-match'],
	rules: {
		'body-match': [2, 'always', COMMIT_REGEX],
	},
};
