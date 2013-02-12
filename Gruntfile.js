/*global module:false*/

module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                banner: 'javascript:'
            },
            pre: {
                src: ['src/bookmarklet.js'],
                dest: 'dist/bookmarklet.js'
            },
            post: {
                src: ['dist/bookmarklet.tmp.js'],
                dest: 'dist/bookmarklet.min.js'
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass/',
                    cssDir: 'css/'
                }
            },
            dev: {
                options: {
                    sassDir: 'sass/',
                    cssDir: 'css/',
                    debugInfo: true
                }
            }
        },
        watch: {
            stylesheets: {
                files: ['sass/*.scss'],
                tasks: ['compass:dev']
            },

            concat: {
                files: ['src/**/*.js'],
                tasks: ['concat:pre', 'uglify', 'concat:post']
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/bookmarklet.tmp.js': ['dist/bookmarklet.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['compass', 'concat:pre', 'uglify', 'concat:post']);
};
