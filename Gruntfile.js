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
            }
        },
        watch: {
            stylesheets: {
                files: ['**/*.sass'],
                tasks: ['compass.dist']
            },

            concat: {
                files: ['src/**/*.js'],
                tasks: ['concat.pre']
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
