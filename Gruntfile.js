'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    //Configuration for all tasks
    grunt.initConfig({

        beertrail: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= beertrail.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                livereload: '<%= connect.options.livereload %>'
                }
            },
            compass: {
                files: ['<%= beertrail.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= beertrail.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= beertrail.app %>/images/{,*/}*.{png,jpg,jpeg}'
                ]
            }
        }, //end watch

        //Grunt Serve settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                      return [
                           connect.static('.tmp'),
                           connect().use(
                               '/libs',
                                connect.static('./libs')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        }, //end connect

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= beertrail.app %>/scripts/{,*/}*.js'
                ]
            },
            test: {
                options: {
                jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        }, // jshint

    }); //end .initConfig
};