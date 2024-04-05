$(document).ready(function () {
	// hamburger
	$(".hamurger_menu").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").removeClass("active");
	});

	// header navs
	$(".header_navs li a").on("click", function (e) {
		e.preventDefault();
		$(".header_navs li a").removeClass("active");
		$(this).addClass("active");
	});

	// faq
	$(".faq_head").on("click", function (e) {
		e.preventDefault();
		$(this).find(".faq_icon").toggleClass("active");
		$(this).parent().find(".faq_body").slideToggle(400);
		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_body")
			.slideUp();
		$(this)
			.parent(".faq_item")
			.prevAll(".faq_item")
			.find(".faq_icon")
			.removeClass("active");
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_body")
			.slideUp();
		$(this)
			.parent(".faq_item")
			.nextAll(".faq_item")
			.find(".faq_icon")
			.removeClass("active");
	});

	// core animation
	$(".core_img img").on("mouseenter", function (e) {
		$(".left_hand").toggleClass("active");
		$(".right_hand").toggleClass("active");
	});
	$(".core_img img").on("mouseleave", function (e) {
		$(".left_hand").removeClass("active");
		$(".right_hand").removeClass("active");
	});
});
