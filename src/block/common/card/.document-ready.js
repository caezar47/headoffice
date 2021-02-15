$('.card__item.is--works-map').on('show.bs.collapse', function () {
	$('.card__item.is--works-map').collapse('hide');
	$('.section__section.is--page-works-contacts').addClass('is--show');
});
$('.card__item.is--works-map').on('shown.bs.collapse', function () {
	$(this).addClass('is--show-card');
	$('.section__section.is--page-works-contacts').addClass('is--show');
});
//$('.card__item.is--works-map').on('hidden.bs.collapse', function () {
$('.card__item.is--works-map').on('hide.bs.collapse', function () {
	$(this).removeClass('is--show-card');
	$('.section__section.is--page-works-contacts').removeClass('is--show');
});
/*var card = $('[data-services-card]');
var result = $('#services-result ul');
card.on('change', function(){
	if($(this).prop('checked') == true){
  		$('#services-result').addClass('is--visible');
  		$(document).find(result).append('<li>'+$(this).val()+'</li>');
	} else {
  		$(document).find("li:contains('"+$(this).val()+"')").remove();
  		if($('#services-result ul li').length == 0 ){
  			$('#services-result').removeClass('is--visible');
  		}
	}
});*/