/**
 * TODO: List of all plugins you need to start
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const run = require('run-sequence');
const postCss = require('gulp-postcss');
const cssNano = require('cssnano');
const autoprefixer = require('autoprefixer');
const delDuplicateCss = require('postcss-discard-duplicates');
const htmlMin = require('gulp-htmlmin');


/**
 * TODO: Watch list all the task you need to avoid repeat the same actions like (gulp... gulp... etc..).
 * @param {string = 'name of your task'}.
 * @param {array = [ 'task to execute in first', 'task to execute in second', 'task in third', etc..] }.
 * @param {function = what your task is goind to do}.
 * @returns list of function with watch function.
 */
gulp.task('default', ['browserSync', 'sass'], () => {
  gulp.watch('docs/sass/**/*.scss', ['sass'] );
  gulp.watch('docs/index.html', browserSync.reload);
  gulp.watch('docs/leclub.html', browserSync.reload);
  gulp.watch('docs/comission.html', browserSync.reload);
  gulp.watch('docs/annuaire.html', browserSync.reload);
  gulp.watch('docs/js/*.js', browserSync.reload);
} );

/**
 * TODO: compile le fichier main.scss en fichier main.css dans le dossier docs/css/main.css qui est le fichier inclut dans les pages HTML.
 * @param {string = 'name of your task'}.
 * @param {function = what your task is goind to do}.
 * @returns A function.
 */
gulp.task('sass', () => {
  return gulp.src('docs/sass/main.scss')
  .pipe(sass() )
  .pipe(gulp.dest('docs/css') )
  .pipe(browserSync.reload( { stream: true } ) );
} );


/**
 * TODO: Crée et minifie les fichiers CSS et JS, HTML présents dans le dossier docs pour les mettre dans le dossier production src.
 */
gulp.task ('css', () => {
  return gulp.src ('./docs/css/main.css')
  .pipe(postCss( [require('autoprefixer'), require('postcss-discard-duplicates') ,require('cssnano') ] ) )
  .pipe (gulp.dest ('./src/') );
});


gulp.task ('html', () => {
  return gulp.src ('./docs/*.html')
  .pipe (htmlMin ( { collapseWhitespace: true } ) )
  .pipe (gulp.dest ('./src') );
} );
/**
 * TODO: Supprime le fichier source.
 */
gulp.task('del', () => {
  return del.sync('src/*');
} );


/**
 * TODO: Ensemble de tâches effectuées à la suite et non simultanément.
 */
gulp.task('build', (callback) => {
  return run('del', 'html', 'css', callback);
} );


/**
 * TODO: Configure un serveur pour éviter de recharger le navigateur tout le temps.
 */
gulp.task('browserSync', () => {
  browserSync.init({
      server: {
          baseDir: 'docs'
      }
  } )
} );
