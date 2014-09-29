module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                // Override defaults here
                //debug: true
            },
            dev: {
                options: {
                    port: 3002,
                    script: 'server.js'
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                separator: ';',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                src: [
                    'www/app/main.js',
                    'www/app/app.js',
                    'www/app/**/*.js'
                ],
                dest: 'www/compiled/app.min.js'
            }
        },
        less: {
            options: {
                sourceMap: true,
                atBegin: true
            },
            dist: {
                files: {
                    'www/content/app.min.css': 'www/content/less/app.less'
                }
            }
        },
        watch: {
            js: {
                files: ['www/app/**/*.js'],
                tasks: ['uglify'],
                options: {
                    atBegin: true,
                    livereload: true
                }
            },
            css: {
                files: ['www/content/**/*.less'],
                tasks: ['less'],
                options: {
                    atBegin: true,
                    livereload: true
                }
            },
            html: {
                files: ['www/**/*.html'],
                options: {
                    livereload: true
                }
            },
            express: {
                files:  [ '*.js', 'server/**/*.js', 'node_modules/express-rest/**.*' ],
                tasks:  [ 'express:dev' ],
                options: {
                    atBegin: true,
                    spawn: false,
                    livereload: true
                }
            }
        }
    });
    
        
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};