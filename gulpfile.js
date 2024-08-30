const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Задача для копирования HTML и CSS файлов в папку dist
gulp.task('copy-html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('copy-css', function() {
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

gulp.task('copy-js', function() {
    return gulp.src('src/*.js')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

// Задача для запуска локального сервера
gulp.task('serve', function() {
    browserSync.init({
        server: './dist'
    });

    gulp.watch('src/*.html', gulp.series('copy-html'));
    gulp.watch('src/*.css', gulp.series('copy-css'));
    gulp.watch('src/*.js', gulp.series('copy-js'));
});

// Задача по умолчанию
gulp.task('default', gulp.series('copy-html', 'copy-css', 'copy-js', 'serve'));
