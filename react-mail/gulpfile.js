'use strict';

let gulp = require('gulp');
let connect = require('gulp-connect'); // local server
let concat = require('gulp-concat');   // Concatenates files
let lint = require('gulp-eslint');     // Lint for Js and JSX file
let postcss = require('gulp-postcss');
let babelify = require('babelify');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let merge = require('merge-stream');
let minifyCSS = require('gulp-minify-css');

let config = {
    baseUrl: 'http://localhost',
    port: 9090,
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: {
            component: './src/**/*.css',
            vanilla: [
                './node_modules/bootstrap/dist/css/bootstrap.css',
                './node_modules/bootstrap/dist/css/bootstrap-theme.css'
            ]
        },
        images: './src/images/*',
        mainJs: './src/index.js',
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
        , defaultFile: 'dist/index.html'
        , fallback: 'dist/index.html'
    });
});

gulp.task('open', ['connect'], function () {
    /*
     gulp.src('dist/index.html')
     .pipe(open({uri: config.baseUrl + ':' + config.port + '/'}));
     */

});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    browserify('./src/index.js', {debug: true})
        .transform(babelify.configure({
            presets: ["es2015", "react", "stage-0"],
            plugins: ["css-modules-transform", {
                // generateScopedName: '[name]__[local]___[hash:base64:5]'
            }]
        }))
        .bundle()
        .on("error", function (err) {
            // eslint-disable-next-line no-console
            console.log("Error : " + err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts/'))
});

gulp.task('styles', function () {
    let componentCss = gulp.src(config.paths.css.component)
        .pipe(postcss([
            require('postcss-modules')({
                generateScopedName: '[name]__[local]___[hash:base64:5]',
            })
        ]))
        .on("error", function (err) {
            // eslint-disable-next-line no-console
            console.log("Error : " + err.message);
        });

    let vanillaCss = gulp.src(config.paths.css.vanilla);

    merge(componentCss, vanillaCss)
        .pipe(minifyCSS())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/styles/'))
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
    gulp.watch(config.paths.js, ['lint', 'scripts']);
    gulp.watch(config.paths.css.component, ['styles']);
    gulp.watch(config.paths.images, ['images']);
});

gulp.task('dist', ['html', 'lint', 'scripts', 'styles', 'images']);

gulp.task('default', ['dist', 'watch', 'open']);