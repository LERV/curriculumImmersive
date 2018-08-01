/* Gulpfile.js */
let gulp = require('gulp');
let webserver = require('gulp-webserver');
let path = require('path');
let sass = require('gulp-sass')



//Copy html file to dist
gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
});


gulp.task('server', () => {
    gulp.src('dist/')
        .pipe(webserver({
            livereload: true,
            open: true
        }))
});

gulp.task('img', () => {
    return gulp.src('src/img/**/*.{gif,jpg,png,svg}')
      .pipe(gulp.dest('dist/assets/img/'))
  })


/* Styles task */
gulp.task('styles', () => {
    return gulp.src('src/scss/main.scss')
        .pipe(sass({includePaths: [
                path.join(__dirname, 'node_modules/bootstrap/scss'),
                path.join(__dirname, 'src/scss')]
            , outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/assets/css/'))
})


  gulp.task('start', [
    'img',
    'html',
    'styles',
    'server'
], cb => cb);



