var gulp = require('gulp'),
    connect = require('gulp-connect');

var paths = {
    js: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/tether/dist/js/tether.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'
    ],
    css: [
        'bower_components/tether/dist/css/tether.css',
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/font-awesome/css/font-awesome.css'
    ],
    fonts: [
        'bower_components/font-awesome/fonts/*'
    ],
    source: [
        './app/**/*.html',
        './app/**/*.js'
    ]
}

gulp.task('dev:js', function () {
    return gulp.src(paths.js)
        .pipe(gulp.dest('assets/libs/js'));
});

gulp.task('dev:css', function () {
    return gulp.src(paths.css)
        .pipe(gulp.dest('assets/libs/css'));
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('assets/libs/fonts'));
});

gulp.task('connect', function () {
    connect.server({
        root: ['app', 'assets'],
        livereload: true
    });
});

gulp.task('reload', function () {
    return gulp.src(paths.source)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(paths.source, ['reload']);
});

gulp.task('dev', ['dev:js', 'dev:css', 'connect', 'watch']);
gulp.task('default', ['dev', 'fonts']);