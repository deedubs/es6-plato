'use strict';

// Project metadata.
var pkg = require('../package.json'),
	options = require('./cli/options.json');

function version() {
	console.log(pkg.version);
}

function help() {
	console.log('\nUsage : %s [options] file1.js file2.js ... fileN.js', pkg.name);

	function displayOptionInCli(shortOption) {
		var option = options[shortOption];
		console.log(
      '  -%s%s%s%s',
      shortOption,
      option.long ? ', --' + option.long : '',
      option.type !== 'Boolean' ? ' : ' + option.type : '',
      option.required ? ' *required*' : ''
    );

		console.log('      %s', option.desc);
	}

	Object.keys(options).forEach(displayOptionInCli);
}

exports.name = pkg.name;
exports.version = version;
exports.help = help;
