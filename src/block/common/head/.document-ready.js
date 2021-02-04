$('img').addClass('img-responsive');  
$('.card__item.is--works-map').on('show.bs.collapse', function () {
	$('.card__item.is--works-map').collapse('hide');
	$('.section__section.is--page-works-contacts').removeClass('is--show-card');
	$('.section__section.is--page-works-contacts').addClass('is--show-card');
	//$(this).addClass('is--show');
	$('.section__section.is--page-works-contacts').addClass('is--show');
});