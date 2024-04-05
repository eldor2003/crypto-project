$(document).ready(function () {
	// hamburger
	$(".hamburger_icon a").on("click", function (e) {
		e.preventDefault();
		$(".mobile_block").addClass("active");
	});

	$(".close , .mobile_navigation li a").on("click", function (e) {
		e.preventDefault();
		$(".mobile_block").removeClass("active");
	});

	// $(".mobile_navigation li a").on("click", function (e) {
	// 	e.preventDefault();
	// 	$(".mobile_navigation li a").removeClass("active");
	// 	$(this).addClass("active");
	// });

	// header navs
	$(".header_navs li a").on("click", function (e) {
		e.preventDefault();
		$(".header_navs li a").removeClass("active");
		$(this).addClass("active");
	});

	// trading items
	$(".trading_right_item ").on("click", function (e) {
		e.preventDefault();
		$(".trading_right_item").removeClass("active");
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

	// calculator
	$(".calc_bottom button").on("click", function (e) {
		e.preventDefault();
		let tonAmount = document.querySelector(".amount").value * 1; // Deposit
		let cellsProfit = 0.02; // Profit margin per cell

		let laps = document.querySelector(".laps").value * 1; // Number of purchases
		let result = (tonAmount + cellsProfit).toFixed(2);
		alert(result);
		$(".result").val();
	});

	const mediaQuery = window.matchMedia("(max-width: 576px)");
	// Check if the media query is true
	if (mediaQuery.matches) {
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			console.log(scroll);
			if (scroll > 900) {
				$(".left_hand").removeClass("active");
				$(".right_hand").removeClass("active");
			} else if (scroll < 900) {
				$(".left_hand").toggleClass("active");
				$(".right_hand").toggleClass("active");
			}
		});
	}
});
