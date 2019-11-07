'use strict';

global.$ = {
	gulp: require('gulp'),

	//gulp-load-plugins init
	gp: require('gulp-load-plugins') ({
		//need to work plugin - "del"
		pattern: ['*', '!gulp'],
		//need to work all this plugin
		rename: {
			'gulp-remove-html': 'gulpRemoveHtml',
			'gulp-group-css-media-queries': 'gcmq',
			'gulp-html-beautify': 'gulpHtmlBeautify',
			'browser-sync': 'browserSync',
			'imagemin-pngquant': 'pngquant',
			'gulp-newer': 'newer',
			'gulp-replace': 'gulpReplace',
			'gulp-responsive-imgz': 'imgRetina',
		},
	}),
	config: {
		configInit: require('./gulp-task/config/config.js'),
		pathVar: require('./gulp-task/config/path-var.js'),
		retinizeOpts: {
			//if you need additional options
			suffix: {
			// 1: '@1x',
			2: '@2x',
			// 3: '@3x'
		}
		}
	},
	bsr: function reload(done) {
		$.gp.browserSync.reload();
		done();
	}
}

//cycle for all tasks
// $.config.configInit.forEach(function (taskPath) {
// 	require(taskPath)();
// })
// all tasks
require('./gulp-task/task/style.js')();
require('./gulp-task/task/serve.js')();
require('./gulp-task/task/other.js')();
require('./gulp-task/task/js.js')();
require('./gulp-task/task/html.js')();
require('./gulp-task/task/image.js')();
require('./gulp-task/task/watch.js')();
require('./gulp-task/task/dev-task.js')();

//----------#BUILD DEV FOLDER
//TASK ---- gulp build
$.gulp.task('build', $.gulp.parallel(
	'htmlBuild',
	'jsBuild',
	'cssBuild',
	'fontsBuild'
))

//TASK ---- gulp allImageTask
$.gulp.task('allImageTask', $.gulp.parallel(
	'imageBuild',
	'imageTrashBuild'
))

//TASK ---- gulp
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('build', 'buildDev'),
	$.gulp.parallel('allImageTask', 'webserver', 'watch')
));

//TASK ---- gulp dev-easy
$.gulp.task('dev-easy', $.gulp.parallel('webserver', 'watch'));

//TASK ---- gulp dev
$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel('build', 'justCssBuild', 'otherBuild',
	'buildDev'),
	$.gulp.parallel('webserver', 'watch', 'allImageTask')
))


//----------#PRODUCTION FOLDER
//TASK ---- gulp buildProd
$.gulp.task('buildProd', $.gulp.parallel(
	'htmlProdBuild',
	'jsBuildProd',
	'cssBuildProd',
	'fontsBuildProd'
))

//TASK ---- gulp allImageTaskProd
$.gulp.task('allImageTaskProd', $.gulp.parallel(
	'imageBuildProd',
	'imageTrashBuildProd'
))

//TASK ---- gulp buildProd-noImgFont
$.gulp.task('buildProd-noImgFont', $.gulp.parallel(
	'htmlProdBuild',
	'jsBuildProd',
	'cssBuildProd'
))

//TASK  ---- gulp dist
$.gulp.task('dist', $.gulp.series(
	'cleanProd',
	$.gulp.parallel('buildProd', 'justCssBuildProd', 'jsMinBuildProd', 'otherBuildProd'),
	$.gulp.parallel('allImageTaskProd', 'webserverProd', 'watchProd')
))

//TASK  ---- gulp dist-easy
$.gulp.task('dist-easy', $.gulp.parallel('buildProd-noImgFont', 'justCssBuildProd', 'jsMinBuildProd', 'otherBuildProd','webserverProd', "watchProd"))

//TASK  ---- gulp dist-easy
$.gulp.task('dist-fast', $.gulp.series(
	'cleanProd',
	$.gulp.parallel('buildProd', 'justCssBuildProd', 'jsMinBuildProd', 'otherBuildProd', 'allImageTaskProd')
))