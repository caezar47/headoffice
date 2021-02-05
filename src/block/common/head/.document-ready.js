$('img').addClass('img-responsive');  
$('.card__item.is--works-map').on('show.bs.collapse', function () {
	$('.card__item.is--works-map').collapse('hide');
	$('.section__section.is--page-works-contacts').addClass('is--show');
});
$('.card__item.is--works-map').on('shown.bs.collapse', function () {
	$(this).addClass('is--show-card');
});
$('.card__item.is--works-map').on('hidden.bs.collapse', function () {
	$(this).removeClass('is--show-card');
});