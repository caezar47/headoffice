$(".card__item.is--works-map").on("show.bs.collapse",function(){$(".card__item.is--works-map").collapse("hide"),$(".section__section.is--page-works-contacts").addClass("is--show")}),$(".card__item.is--works-map").on("shown.bs.collapse",function(){$(this).addClass("is--show-card"),$(".section__section.is--page-works-contacts").addClass("is--show")}),$(".card__item.is--works-map").on("hide.bs.collapse",function(){$(this).removeClass("is--show-card"),$(".section__section.is--page-works-contacts").removeClass("is--show")});
var form_panel=$("[data-form-validation]"),phone=$(".form__control[type='tel']"),file=$(".form__file-input"),file_name=$(".form__file-name"),input=$(".form__control"),reset=$(".form__reset");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),form_panel.validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1}),input.on("input",function(){$(this).siblings(".form__result").addClass("is--open"),$(this).siblings(".form__clear").addClass("is--active")}),file.on("change",function(e){console.log($(this).val()),$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,""))}),reset.on("click",function(e){file_name.html(file_name.data("heading"))});
$("img").addClass("img-responsive");
var w=$("body").innerWidth(),h=$(".section__img.is--page-works-contacts").innerHeight(),center_x=$(".map__block").attr("data-center-x"),center_y=$(".map__block").attr("data-center-y");$(".section__img.is--page-works-contacts").animate({scrollTop:center_y-h/2,scrollLeft:center_x-w/2},777),$("#contacts-map").on("show.bs.collapse",function(t){var a=$(".map__dropdown").find("[href='#"+$(t.target).attr("id")+"']"),e=a.attr("data-x"),r=a.attr("data-y"),o=a.text();$(".map__dropdown-menu li").removeClass("is--active"),a.parent().addClass("is--active"),$(".section__img.is--page-works-contacts").animate({scrollLeft:e-w/2,scrollTop:r-h/2},777),$(".map__dropdown-trigger").text(o)});

var humb=$("[data-hamburger]"),collapse=$(".navbar__aside"),html=$("html");humb.on("click",function(){$(this).toggleClass("is--active"),$(collapse).toggleClass("is--open"),$(html).toggleClass("is--open-navbar")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__aside-container").length&&0==$(a.target).closest("[data-hamburger]").length&&(humb.removeClass("is--active"),$(html).removeClass("is--open-navbar"),$(collapse).removeClass("is--open"))});

$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");

var prevArrow='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',nextArrow='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',banner=$("[data-slick-banner]"),team=$("[data-slick-team]"),team_full=$("[data-slick-team-full]"),adv=$("[data-slick-adv]");banner.slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,draggable:!1,pauseOnFocus:!1,pauseOnHover:!1,swipe:!1,touchMove:!1,fade:!0,infinite:!0,autoplay:!0,autoplaySpeed:7e3}),team.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!0,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:768,settings:{}}]}),adv.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:768,settings:{dots:!0}}]}),team_full.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,autoplay:!1}),767<$(document).width()&&(team.slick("unslick"),adv.slick("unslick"),team_full.slick("unslick"));