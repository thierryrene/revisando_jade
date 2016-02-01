module.exports = function(grunt) {

    grunt.initConfig({

        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: "jade",
                    src: "*.jade",
                    dest: "build",
                    ext: ".html"
                }]
            }
        },

        watch: {
            scripts: {
                files: ["jade/*.jade"],
                tasks: ["jade"],
                options: {
                    spawn: false,
                },
            },
        },

    });

    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-watch");

}