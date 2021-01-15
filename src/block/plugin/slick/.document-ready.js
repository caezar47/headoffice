var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';

var banner  	= $('[data-slick-banner]');
var team  		= $('[data-slick-team]');
var team_full  	= $('[data-slick-team-full]');
var adv 		= $('[data-slick-adv]');

banner.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	draggable: false,
	pauseOnFocus: false,
	pauseOnHover: false,
	swipe: false,
	touchMove: false,
	fade: true, 	
	infinite: true, 
	autoplay: true,
	autoplaySpeed: 7000,
});
team.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	fade: true, 	
	infinite: true, 
	//autoplay: true,
	//autoplaySpeed: 4000,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
  	responsive: [	
	    {
			breakpoint: 768,
			settings: {
			}
	    }
	]
});
adv.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	fade: true, 	
	infinite: false,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
});
team_full.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	fade: true, 	
	infinite: false,
	prevArrow: prevArrow,
	nextArrow: nextArrow,
	autoplay: false,
});
if($(document).width() > 767) {
	adv.slick('unslick');
	team_full.slick('unslick');
}