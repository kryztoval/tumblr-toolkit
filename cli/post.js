module.exports = yargs => {

	yargs
		.describe('b', 'Blog name to post to')
		.usage('Usage: $0 post -c [file] -b [blog] -m [video|photo] -f filepath [options] --link [link]')
		.option('m', {
			alias: 'media',
			describe: 'Media type',
			demandOption: true,
			choices: ['video', 'photo'],
		})
		.option('s', {
			alias: 'state',
			describe: 'Post state',
			default: 'published',
			choices: ['published', 'draft', 'queue', 'private'],
		})
		.option('f', {
			alias: 'file',
			describe: 'Path to media file',
			demandOption: true,
			type: 'string',
		})
		.option('caption', {
			describe: 'Post caption',
			type: 'string',
		})
		.describe('link', 'The pass thru link for a photo post')
		.option('link', {
			describe: 'Post link',
			type: 'string',
		})
		.option('tags', {
			describe: 'Post tags, comma separated (e.g. "tag, tag two, third")',
			type: 'string',
		});
}
