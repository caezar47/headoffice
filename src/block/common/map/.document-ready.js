var w = $('body').innerWidth();
var h = $('.section__img.is--page-works-contacts').innerHeight();
var center_x = $('.map__block').attr('data-center-x');
var center_y = $('.map__block').attr('data-center-y');
$('.section__img.is--page-works-contacts').animate({
	scrollTop: (center_y - h/2),
	scrollLeft: (center_x - w/2)
}, 777);
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