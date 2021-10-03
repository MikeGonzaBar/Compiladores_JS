const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const tsc = require('gulp-typescript');

gulp.task('styles', function(){
  console.log('Transforming sass')
  return gulp.src('src/styles/**/*.scss')         //SOURCE FILES
             .pipe(sass())                      //TRANSFORMATION PROCESS
             .pipe(gulp.dest('assets/styles')); //DESTINY FOLDER
})

gulp.task('styles:watch', gulp.series('styles', function(done){
  gulp.watch('src/styles/**/*.scss',gulp.series('styles'));
  done()
}))

gulp.task('scripts', function(){
  console.log('Transforming scripts')
  const tsConfig = tsc.createProject('tsconfig.json')
  return tsConfig.src()                         //SOURCE FILES
             .pipe(tsConfig())                      //TRANSFORMATION PROCESS
             .pipe(gulp.dest('assets/scripts')); //DESTINY FOLDER
})

gulp.task('scripts:watch', gulp.series('scripts', function(done){
  gulp.watch('src/scripts/**/*.ts',gulp.series('scripts'));
  done()
}))

gulp.task('default',gulp.parallel('styles','scripts', function(done){
  done()
}));

gulp.task('serve', gulp.parallel('styles:watch', 'scripts:watch'));