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
        // 'src/**',
        'css/main2.css',
        '!node_modules/**/*.css'
        // 'style/css/main3.css',
        // 'js/**',
        // 'fonts/**',
        // 'index2.html'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    // return gulp.src( globs, { base: 'ohter', buffer: true } )
    return gulp.src('style/css/main3.css')
        .pipe( conn.newer( 'style/css/' ) ) // only upload newer files
        .pipe( conn.dest( 'style2/test/3/' ) );

} );

