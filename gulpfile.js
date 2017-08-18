var gulp = require('gulp'), 
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');



gulp.task('default', function(){
	console.log("Hurray gulp task created.");
}
 );
 
 gulp.task( 'html', function(){
	 console.log("somthing related to html done here");
 });
 
 gulp.task( 'styles', function(){
	 //console.log("somthing css styles change done here");
	 
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
	 
 });
 
 
 gulp.task('watch', function(){
	 watch('./app/index.html', function(){
		 gulp.start('html');
	 });
	 watch('./app/assets/styles/**/*.css', function(){
		 gulp.start('styles');
	 });
 });