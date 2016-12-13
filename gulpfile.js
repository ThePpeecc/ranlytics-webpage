//getting our gulp parts
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    map = require('gulp-sourcemaps'),
    htmlmin = require('gulp-htmlmin'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    jsonminify = require('gulp-jsonminify');



gulp.task('scripts', function() {
    return gulp.src([ 'node_modules/particles.js/particles.js', 'src/**/*.js'])
        .pipe(map.init())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(map.write('./'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('styles', function() {
    return gulp.src(['src/**/*.css'])
        .pipe(map.init())
        .pipe(concat('all.min.css'))
        .pipe(cssnano())
        .pipe(map.write('./'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('images', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('assets', function() {
    return gulp.src(['src/assets/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('build', ['scripts', 'html', 'fonts', 'assets', 'styles'], function() {
    console.log('Done building')
})

gulp.task('f-build', ['scripts', 'html', 'images', 'assets', 'fonts', 'styles'], function() {
    console.log('Done building')
})

gulp.task('clean', function() {
    return del('dist');
})

gulp.task('default', function() {

})
