const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/assets/js/vue-app.js', 'public/js')
    .extract([])
    .version();

mix
    // .js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css')
    //Theme Css
    .copy('resources/sass/theme/css/style.min.css','public/css/theme')
    .copy('resources/sass/theme/css/common.css','public/css/theme')
    //Theme JS
    .copy('resources/js/theme/library/jquery.js','public/js/theme/library')
    .copy('resources/js/theme/library/jquery-ui.js','public/js/theme/library')
    .copy('resources/js/theme/library/bootstrap.js','public/js/theme/library')
    .copy('resources/js/theme/library/jquery.sticky.js','public/js/theme/library')
    .copy('resources/js/theme/library/jquery.jcarousel.js','public/js/theme/library')
    .copy('resources/js/theme/library/jcarousel.connected-carousels.js','public/js/theme/library')
    .copy('resources/js/theme/library/owl.carousel.js','public/js/theme/library')
    .copy('resources/js/theme/library/progressbar.js','public/js/theme/library')
    .copy('resources/js/theme/library/jquery.bracket.min.js','public/js/theme/library')
    .copy('resources/js/theme/library/chartist.js','public/js/theme/library')
    .copy('resources/js/theme/library/Chart.js','public/js/theme/library')
    .copy('resources/js/theme/library/fancySelect.js','public/js/theme/library')
    .copy('resources/js/theme/library/isotope.pkgd.js','public/js/theme/library')
    .copy('resources/js/theme/library/imagesloaded.pkgd.js','public/js/theme/library')

    .copy('resources/js/theme/jquery.team-coundown.js','public/js/theme')
    .copy('resources/js/theme/matches-slider.js','public/js/theme')
    .copy('resources/js/theme/header.js','public/js/theme')
    .copy('resources/js/theme/matches_broadcast_listing.js','public/js/theme')
    .copy('resources/js/theme/news-line.js','public/js/theme')
    .copy('resources/js/theme/match_galery.js','public/js/theme')
    .copy('resources/js/theme/main-club-gallery.js','public/js/theme')
    .copy('resources/js/theme/product-slider.js','public/js/theme')
    .copy('resources/js/theme/circle-bar.js','public/js/theme')
    .copy('resources/js/theme/standings.js','public/js/theme')
    .copy('resources/js/theme/shop-price-filter.js','public/js/theme')
    .copy('resources/js/theme/timeseries.js','public/js/theme')
    .copy('resources/js/theme/radar.js','public/js/theme')
    .copy('resources/js/theme/slider.js','public/js/theme')
    .copy('resources/js/theme/preloader.js','public/js/theme')
    .copy('resources/js/theme/diagram.js','public/js/theme')
    .copy('resources/js/theme/bi-polar-diagram.js','public/js/theme')
    .copy('resources/js/theme/label-placement-diagram.js','public/js/theme')
    .copy('resources/js/theme/donut-chart.js','public/js/theme')
    .copy('resources/js/theme/animate-donut.js','public/js/theme')
    .copy('resources/js/theme/advanced-smil.js','public/js/theme')
    .copy('resources/js/theme/svg-path.js','public/js/theme')
    .copy('resources/js/theme/pick-circle.js','public/js/theme')
    .copy('resources/js/theme/horizontal-bar.js','public/js/theme')
    .copy('resources/js/theme/gauge-chart.js','public/js/theme')
    .copy('resources/js/theme/stacked-bar.js','public/js/theme')

    .copy('resources/js/theme/library/chartist-plugin-legend.js','public/js/theme/library')
    .copy('resources/js/theme/library/chartist-plugin-threshold.js','public/js/theme/library')
    .copy('resources/js/theme/library/chartist-plugin-pointlabels.js','public/js/theme/library')

    .copy('resources/js/theme/treshold.js','public/js/theme')
    .copy('resources/js/theme/visible.js','public/js/theme')
    .copy('resources/js/theme/anchor.js','public/js/theme')
    .copy('resources/js/theme/landing_carousel.js','public/js/theme')
    .copy('resources/js/theme/landing_sport_standings.js','public/js/theme')
    .copy('resources/js/theme/twitterslider.js','public/js/theme')
    .copy('resources/js/theme/champions.js','public/js/theme')
    .copy('resources/js/theme/landing_mainnews_slider.js','public/js/theme')
    .copy('resources/js/theme/carousel.js','public/js/theme')
    .copy('resources/js/theme/video_slider.js','public/js/theme')
    .copy('resources/js/theme/footer_slides.js','public/js/theme')
    .copy('resources/js/theme/player_test.js','public/js/theme')

    .copy('resources/js/theme/main.js','public/js/theme')

;
