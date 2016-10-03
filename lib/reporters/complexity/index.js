//TODO: make this not a janky munge of old plato code and the new stuff

var escomplex = require('typhonjs-escomplex'),
	_ = require('lodash');


function process(source, options, reportInfo) {

	var report = escomplex.analyzeModule(source, options);





  // Make the short filename easily accessible
	report.module = reportInfo.fileShort;

  // Munge the new `escomplex-js` format to match the older format of
  // `complexity-report`



	//this is just adapting the new module to the old stuff.
	//TODO its messy and it needs ot not be here forever.
	/*
	date: date,
	sloc: r.aggregate.complexity.sloc.physical,
	lloc: r.aggregate.complexity.sloc.logical,
	functions: r.functions.length,
	deliveredBugs: r.aggregate.complexity.halstead.bugs,
	maintainability: r.maintainability,
	difficulty: r.aggregate.complexity.halstead.difficulty
	*/



	report.aggregate = report.aggregate || {};
	report.aggregate.complexity = _.clone(report.methodAggregate);


	function methodToReportFunction(func) {



		func.complexity = _.extend({},{
			cyclomatic: func.cyclomatic,
			sloc: func.sloc,
			halstead: func.halstead
		});

		func.line = func.line || func.lineStart;

		console.log('func', func);

		return func;
	}

	// console.log('complexity:');
	// console.log(report);


	report.functions = _
		.chain(report.methods)
		.map(methodToReportFunction)
		.value();



	console.log('report --->', report);

	return report;
}

exports.process = process;
