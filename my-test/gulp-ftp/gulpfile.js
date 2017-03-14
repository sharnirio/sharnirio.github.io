var gulp = require( 'gulp' );
// var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

gulp.task( 'deploy', function() {

    var conn = ftp.create( {
        host:     '178.63.197.105',
        user:     'dvelop_test',
        password: 'K6e2I1x4',
        port: 21
    } );

    var globs = [
        'css/main2.css',
        // '!node_modules/**/*.css'
    ];

    var newerFolder = 'style/css/';

    var path = 'style2/test/3/';

    return gulp.src(globs)
        .pipe( conn.newer(newerFolder) ) // only upload newer files
        .pipe( conn.dest(path) );

} );