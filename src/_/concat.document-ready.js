var card=$("[data-services-card]"),result=$("#services-result ul");card.on("change",function(){1==$(this).prop("checked")?($("#services-result").addClass("is--visible"),$(document).find(result).append("<li>"+$(this).val()+"</li>")):($(document).find("li:contains('"+$(this).val()+"')").remove(),0==$("#services-result ul li").length&&$("#services-result").removeClass("is--visible"))});
var form_panel=$("[data-form-validation]"),phone=$(".form__control[type='tel']"),file=$(".form__file-input"),file_name=$(".form__file-name"),input=$(".form__control"),reset=$(".form__reset");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),form_panel.validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1}),input.on("input",function(){$(this).siblings(".form__result").addClass("is--open"),$(this).siblings(".form__clear").addClass("is--active")}),file.on("change",function(e){console.log($(this).val()),$(this).siblings(".form__file-name").html($(this).val().replace(/.*(\/|\\)/,""))}),reset.on("click",function(e){file_name.html(file_name.data("heading"))});
$("img").addClass("img-responsive");


var humb=$("[data-hamburger]"),collapse=$(".navbar__aside"),html=$("html");humb.on("click",function(){$(this).toggleClass("is--active"),$(collapse).toggleClass("is--open"),$(html).toggleClass("is--open-navbar")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__aside-container").length&&0==$(a.target).closest("[data-hamburger]").length&&(humb.removeClass("is--active"),$(html).removeClass("is--open-navbar"),$(collapse).removeClass("is--open"))});

$(".text__block table").addClass("table").wrap('<div class="table-responsive"></div>'),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled");

var prevArrow='<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',nextArrow='<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',team=$("[data-slick-team]"),team_full=$("[data-slick-team-full]"),adv=$("[data-slick-adv]");team.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!0,autoplay:!0,autoplaySpeed:4e3,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:768,settings:{}}]}),adv.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow}),team_full.slick({slidesToShow:1,slidesToScroll:1,dots:!1,fade:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,autoplay:!1}),767<$(document).width()&&(adv.slick("unslick"),team_full.slick("unslick"));var catalog=$("[data-slick-catalog]"),dataPrevArrow=$("[data-slick-catalog]").data("slick-prev"),dataNextArrow=$("[data-slick-catalog]").data("slick-next"),catalog_card=$("[data-slick-catalog-card]"),catalog_card_nav=$("[data-slick-catalog-card-nav]"),catalog_card_table=$("[data-slick-catalog-card-table]"),gallery=$('[data-slider-slick="slick-gallery"]'),partners=$('[data-slider-slick="slick-partners"]'),edu=$('[data-slider-slick="slick-edu"]'),CMS__TPL_PATH="/wp-content/themes/azbn7theme",count=(CMS__TPL_PATH="",$(".slick-count"));catalog.on("init reInit afterChange",function(a,t,r,s){var e=(r||0)+1;$(this).find(count).html("<span>"+e+"</span><span> / </span><span>"+t.$dots[0].children.length+"</span>")}),$(".section__section").each(function(){$("[data-slick-catalog]",$(this)).slick({slide:".card__item",slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,autoplay:!1,variableWidth:!0,infinite:!1,prevArrow:$(this).find(".slick-btn.is--prev"),nextArrow:$(this).find(".slick-btn.is--next"),responsive:[{breakpoint:768,settings:{arrows:!1}}]})}),catalog_card_nav.slick({slidesToShow:5,slidesToScroll:1,asNavFor:catalog_card,centerMode:!0,arrows:!0,variableWidth:!0,prevArrow:prevArrow,nextArrow:nextArrow,focusOnSelect:!0}),catalog_card_table.slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,variableWidth:!0,infinite:!1,prevArrow:prevArrow,nextArrow:nextArrow,responsive:[{breakpoint:768,settings:{arrows:!1,slidesToShow:1}}]});