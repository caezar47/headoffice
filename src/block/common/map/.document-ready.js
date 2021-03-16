var w = $('body').innerWidth();
var h = $('.section__img.is--page-works-contacts').innerHeight();
var map_base = $('.map__dropdown-menu li:first a');

var center_href = map_base.attr('href');
var center_x = map_base.attr('data-x');
var center_y = map_base.attr('data-y');
var center_name = map_base.text();

$('.map__dropdown-trigger').text(center_name);
$('.section__img.is--page-works-contacts').animate({
	scrollTop: (center_y - h/2),
	scrollLeft: (center_x - w/2)
}, 777);
$('.section__section.is--page-works-contacts').addClass('is--show');
	$('[href="'+center_href+'"]').collapse({
	  toggle: true
	});
	$(center_href).addClass('in is--show-card');
	
if($(document).width() < 992) {
	$('#contacts-map').on('show.bs.collapse', function (e) {
		$('html, body').animate({
			scrollTop: ($('.map__dropdown').offset().top - 30)
		}, 1200);
	})
} 

map_base.parent().addClass('is--active');
$('#contacts-map').on('show.bs.collapse', function (e) {
	var	clicked = $('.map__dropdown').find("[href='#" + $(e.target).attr('id') + "']");
	var city_x = clicked.attr('data-x');
	var city_y = clicked.attr('data-y');
	var city_name = clicked.text();
	$('.map__dropdown-menu li').removeClass('is--active');
	clicked.parent().addClass('is--active');
	$('.section__img.is--page-works-contacts').animate({
		scrollLeft: (city_x - w/2),
		scrollTop: (city_y - h/2)
	}, 777);
	$('.map__dropdown-trigger').text(city_name);
})

$('.card__item.is--works-map').on('show.bs.collapse', function () {
	$('.card__item.is--works-map').collapse('hide');
	$('.section__section.is--page-works-contacts').addClass('is--show');
});
$('.card__item.is--works-map').on('shown.bs.collapse', function () {
	$(this).addClass('is--show-card');
	$('.section__section.is--page-works-contacts').addClass('is--show');
});
$('.card__item.is--works-map').on('hide.bs.collapse', function () {
	$(this).removeClass('is--show-card');
	$('.section__section.is--page-works-contacts').removeClass('is--show');
});