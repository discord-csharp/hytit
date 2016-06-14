var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    open = require('gulp-open'),
    os = require('os'),
    eslint = require('gulp-eslint'),
    sequence = require('gulp-sequence');

var paths = {
    js: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/tether/dist/js/tether.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/angular-easyfb/build/angular-easyfb.js'
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
        './client/**/*.html',
        './client/**/*.js',
        './client/**/*.css',
    ]
}

gulp.task('dev:js', function () {
    return gulp.src(paths.js)
        .pipe(gulp.dest('libs/js'));
});

gulp.task('dev:css', function () {
    return gulp.src(paths.css)
        .pipe(gulp.dest('libs/css'));
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('libs/fonts'));
});

gulp.task('connect', function () {
    connect.server({
        root: ['./', './client', './client/app'],
        livereload: true,

        middleware: function (connect, opt) {
            return [historyApiFallback()];
        }
    });
});

gulp.task('reload', ['lint'], function () {
    return gulp.src(paths.source)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(paths.source, ['reload']);
});

gulp.task('browser', function () {
    gulp.src(__filename)
        .pipe(open({ uri: 'http://localhost:8080' }));
});

gulp.task('lint', function () {
    return gulp.src(['./client/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('express', sequence('lint', ['dev:js', 'dev:css', 'fonts', 'watch', 'browser'], function () {
    var server = require('./server/server');
}));

gulp.task('dev', sequence('lint', ['dev:js', 'dev:css', 'fonts', 'connect', 'watch', 'browser']));
gulp.task('default', ['dev']);