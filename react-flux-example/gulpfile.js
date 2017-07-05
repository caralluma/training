'use strict';

let gulp = require('gulp');
let connect = require('gulp-connect');  // local server
let open = require('gulp-open');        // to open url
let browserify = require('browserify'); // Bundles the javascript files
let source = require('vinyl-source-stream');    // Use conventional streams with gulp
let concat = require('gulp-concat');    // Concatenates files
let lint = require('gulp-eslint');      // Lint for Js and JSX files
let babelify = require('babelify');

let config = {
    baseUrl: 'http://localhost',
    port: 9002,
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.css',
            'node_modules/toastr/toastr.less'
        ],
        images: './src/images/*',
        mainJs: './src/main.js',
        dist: './dist',
        lint: './.eslintrc.json'
    }
};

// Start the server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.baseUrl,
        liveReload: true
        /**
         * Below two lines added for browserHistory.
         * Because hashHistory supports reload of urls direclty,
         * however for browserHistory we need to specify the path for urls manually.
         * It is done in the below 2 lines of code.
         */
        , defaultFile: 'dist/index/html'
        , fallback: 'dist/index.html'
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.baseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    browserify(config.paths.mainJs, {debug: true})
        .transform(babelify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    // publish favicon
    gulp.src('./src/favicon.png')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
    gulp.watch(config.paths.css, ['css']);
    gulp.watch(config.paths.images, ['images']);
    gulp.watch(config.paths.lint, ['lint']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'lint', 'watch']);