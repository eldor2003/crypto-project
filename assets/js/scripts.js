$(document).ready(function () {
	// hamburger
	$(".hamburger_icon a").on("click", function (e) {
		e.preventDefault();
		$(".mobile_block").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".mobile_block").removeClass("active");
	});

	$(".mobile_navigation li a").on("click", function (e) {
		$(".mobile_block").removeClass("active");
	});

	// header navs
	$(".header_navs li a").on("click", function (e) {
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
	function calculateResult() {
		let tonAmount = parseFloat($(".amount").val()) || 0; // Deposit
		let cellsProfit = 0.02; // Profit margin per cell
		let laps = parseFloat($(".laps").val()) || 0; // Number of purchases
		let cellsCost = 1; // Cost per cell

		function calc(cellsCost, tonAmount, cellsProfit, laps) {
			if (laps === 0) {
				// Base case: no more laps, calculate final balance
				let cellsAmount = tonAmount / cellsCost;
				let result = tonAmount + cellsProfit * cellsCost * cellsAmount;
				return result;
			} else {
				// Perform one transaction (lap)
				let cellsAmount = tonAmount / cellsCost;
				let balance = tonAmount + cellsProfit * cellsCost * cellsAmount;
				// Recursively calculate for the next lap
				return calc(cellsCost, balance, cellsProfit, laps - 1);
			}
		}

		let res = calc(cellsCost, tonAmount, cellsProfit, laps).toFixed(2);
		$(".result").val(res);
	}

	// Initial calculation when the page loads
	calculateResult();

	// Event listener for changes in the amount input
	$(".amount").on("input", function () {
		calculateResult();
	});

	// Event listener for changes in the laps input
	$(".laps").on("input", function () {
		calculateResult();
	});

	const mediaQuery = window.matchMedia("(max-width: 576px)");
	// Check if the media query is true
	if (mediaQuery.matches) {
		var lastScrollTop = 0;
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			var currentScrollTop = $(this).scrollTop();
			// Determine scroll direction
			if (currentScrollTop > lastScrollTop && scroll > 0) {
				// Downscroll code
				$(".left_hand").addClass("active");
				$(".right_hand").addClass("active");
				$(".core_img ").addClass("active");
				console.log("Scrolling down");
			} else {
				// Upscroll code
				$(".left_hand").removeClass("active");
				$(".right_hand").removeClass("active");
				$(".core_img ").removeClass("active");
				console.log("Scrolling up");
			}
			lastScrollTop = currentScrollTop;
			// console.log(scroll);
		});
	}
});
