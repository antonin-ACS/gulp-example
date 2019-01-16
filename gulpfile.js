
// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('css/'));
});

// Tâche "minify" = minification CSS (destination -> destination)
gulp.task('minify', function () {
    return gulp.src('css/*.css')
        .pipe(plugins.csso())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css/'));
});


// Tâche "build"
gulp.task('build', gulp.parallel('css'));

// Tâche "prod" = Build + minify
gulp.task('prod', gulp.parallel('build', 'minify'));

// Tâche par défaut
gulp.task('default', gulp.parallel('prod'));

