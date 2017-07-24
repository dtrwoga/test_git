module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON("package.json"),  	
	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'/css/*.css':'/sass/*.sass'
  			}
  		}
  	},
	imagemin: {
    		dynamic: {
        		files: [{
            			expand: true,
            			cwd: 'images/',
            			src: ['**/*.{png,jpg,gif}'],
            			dest: 'images/build/'
        		}]
    		}
	},
	browserSync: {
            	default_options: {
                	bsFiles: {
                    		src : [
                        		'/css/*.css',
                        		'/*.html'
                    		]
                	},
                	options: {
                    		watchTask: true,
                    		server: {
					baseDir: './'
				}
                	}
            	}
        },
	watch: {
    		scripts: {
        		files: ['sass/*.sass'],
        			tasks: ['sass'],
        			options: {
            			spawn: false,
        		},
    		}
	}
  });
  // Load the plugins tasks
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  
  // Default task(s)

  grunt.registerTask('default', ['browserSync', 'sass', 'imagemin', 'watch']);
 };