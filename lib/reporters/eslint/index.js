'use strict';

var linter = require('eslint').linter;



function process(source, options) {




	var results = lint(source, options);

	var report = generateReport(results);

	return report;
}

function generateReport(data) {
	var out = {
		messages: []
	};

	function addResultToMessages(result) {

		let severityMap = {
			0: 'off',
			1: 'warn',
			2: 'error'
		};

		out.messages.push({
			severity: severityMap[result.severity],
			line: result.line,
			column: result.column,
			message: result.message,
			fix: result.fix || {}
		});
	}

	data.results.forEach(addResultToMessages);
	return out;
}

function lint(source, options) {
	options = options || {};


	var data = [];


  // Remove potential Unicode BOM.
	source = source.replace(/^\uFEFF/, '');

	var results = linter.verify(source, options);

	// console.log('------------------------------');
	// console.log(results);

	return {
		results: results,
		data: data
	};
}

exports.process = process;
