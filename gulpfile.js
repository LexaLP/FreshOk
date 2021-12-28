const {
 src,
 dest,
 watch,
 parallel,
 series
} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const image = require('gulp-image');
const del = require('del');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');


function svgSprites() {
 return src('app/images/icons/*.svg') // выбираем в папке с иконками все файлы с расширением svg
  .pipe(
   svgSprite({
    mode: {
     stack: {
      sprite: '../sprite.svg', // указываем имя файла спрайта и путь
     },
    },
   })
  )
  .pipe(dest('app/images')); // указываем, в какую папку поместить готовый файл спрайта
}


function browsersync() {
 browserSync.init({
  server: {
   baseDir: 'app/'
  },
  notify: false
 })
}


function styles() {
 return src('app/scss/style.scss')
  .pipe(scss({
   outputStyle: 'compressed'
  }).on('error', scss.logError))
  .pipe(concat('style.min.css'))
  .pipe(autoprefixer({
   overrideBrowserslist: ['last 10 versions'],
   grid: true
  }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}

function images() {
 return src('app/images/**/*.*')
  .pipe(image({
   optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
   pngquant: ['--speed=1', '--force', 256],
   zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
   jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
   mozjpeg: ['-optimize', '-progressive'],
   gifsicle: ['--optimize'],
   svgo: ['--enable', 'cleanupIDs', '--disable', 'convertColors']
  }))
  .pipe(dest('dist/images'))
}

function scripts() {
 return src([
   'node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js',
   'node_modules/jquery/dist/jquery.js',
   'node_modules/mixitup/dist/mixitup.min.js',
   'node_modules/rateyo/src/jquery.rateyo.js',
   'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
   'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
   'node_modules/slick-carousel/slick/slick.js',
   'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
}

function build() {
 return src([
   'app/**/*.html',
   'app/css/style.min.css',
   'app/js/main.min.js'
  ], {
   base: 'app'
  })
  .pipe(dest('dist'))
}

function cleanDist() {
 return del('dist')
}

function watching() {
 watch(['app/scss/**/*.scss'], styles);
 watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
 watch(['app/**/*.html']).on('change', browserSync.reload);
 watch(['app/images/icons/*.svg'], svgSprites);
}


exports.styles = styles;
exports.scripts = scripts;
exports.browserSync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprites = svgSprites;
exports.build = series(cleanDist, images, build);


exports.default = parallel(styles, scripts, browsersync, watching, svgSprites, );