


# es6-plato
Visualize JavaScript source complexity with plato. Based on the older es5 plato.


NOTE: This Project is in currently :warning: Alpha :warning:
And still under development;

## Installation
Install the module with: `npm install --save es6-plato`

## Usage


### From scripts

```js

//be sure and set your src, output, and any options.
let src = './scripts/**/*.js';
let outputDir = './artifacts/plato';

let platoArgs = {
  title: 'example',
  eslint: {}
};

//you can use the reports in the callback.
function callback(reports){
  let overview = plato.getOverviewReport(reports);

  let {
    total,
    average
  } = overview.summary;

  let output = `total
    ----------------------
    eslint: ${total.eslint}
    sloc: ${total.sloc}
    maintainability: ${total.maintainability}
    average
    ----------------------
    eslint: ${average.eslint}
    sloc: ${average.sloc}
    maintainability: ${average.maintainability}`;

  console.log(output);
}


//usage is plato.inspect
plato.inspect(src, outputDir, platoArgs, callback);

```

# Example Gulpfile


```js

let gulp = require('gulp');
let plato = require('es6-plato');

let src = './scripts/**/*.js';
let outputDir = './artifacts/plato';

let platoArgs = {
  title: 'example',
  eslint: {}
};

function analysis(){
  function callback(reports){
    let overview = plato.getOverviewReport(reports);

    let {
      total,
      average
    } = overview.summary;

    let output = `total
      ----------------------
      jshint: ${total.eslint}
      sloc: ${total.sloc}
      maintainability: ${total.maintainability}
      average
      ----------------------
      jhint: ${average.eslint}
      sloc: ${average.sloc}
      maintainability: ${average.maintainability}`;

    console.log(output);
  }

  plato.inspect(src, outputDir, platoArgs, callback);

}


gulp.task('analysis', analysis);

```


### From the commandline

```sh
Usage : plato [options] -d <output_dir> <input files>
  -h, --help
      Display this help text.
  -q, --quiet
      Reduce output to errors only
  -v, --version
      Print the version.
  -x, --exclude : String
      File exclusion regex
  -d, --dir : String *required*
      The output directory
  -r, --recurse
      Recursively search directories
  -t, --title : String
      Title of the report
  -D, --date : String
      Time to use as the report date (seconds, > 9999999999 assumed to be ms)
```

__Example__

```shell
plato -r -d report src
```

## Data sources
  - Complexity data by a fork of [Phil Booth](https://github.com/philbooth)'s [escomplex-js](https://github.com/philbooth/escomplex-js)
  - Lint data from [eslint](http://eslint.org/)

## Contributors
  - [Jesse Harlin](https://github.com/the-simian)
  - [Jarrod Overson](https://github.com/jsoverson)
  - [Craig Davis](https://github.com/there4)
  - [David Linse](https://github.com/davidlinse)

## Release History
- 1.0.2-alpha , Project works with es6 and eslint

#About
This is currently a reimplementation of the older  plato, and started as a fork from https://github.com/deedubs/es6-plato, but has since been heavily modified.
After seeing it was unpublished on npm and also wanting to add more features, I Asked if it [would be alright for me to publish and continue the work.](https://github.com/deedubs/es6-plato/issues/4)
This project uses eslint, not jshint for default linting.

## License
Copyright (c) 2012 Jesse Harlin
Licensed under the MIT license.
