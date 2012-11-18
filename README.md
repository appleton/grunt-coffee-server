# grunt-coffee-server

A handy development server which auto compiles CoffeeScript. Just request
`/path/to/filename.js` and the server will return it if it exists otherwise it
will look for `/path/to/filename.coffee` and return the compiled output.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-coffee-server`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-coffee-server');
```

Run the server from the command line:
```bash
grunt coffee-server
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
### Configuration
This task takes two optional configuration options:

```javascript
grunt.initConfig({
  server: {
    port: 1337 // defaults to 3000 if not set
    base: './public' // defaults to ./ if not set
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Andy Appleton
Licensed under the MIT license.
