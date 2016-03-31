var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

gulp.task( 'deploy', function() {

    var conn = ftp.create( {
        host:     '31.220.16.243',
        user:     '****',
        password: '****',
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
        // 'src/**',
        'css/**',
        // 'js/**',
        // 'fonts/**',
        'index.html'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) );

} );