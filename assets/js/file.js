const local = {
	en: {
		navigation: {
			home: "Home",
			market: "Market",
			trade: "Trade",
			faq: "FAQ",
			ButtonNavigation: {
				joinNavigation: "Join",
				marketNavigation: "Market",
			},
		},
		main: {
			mainText: "Trade liquidity cells for fun and earning",
			descriptionMain:
				"Stay ahead of other traders and cryptocurrency enthusiasts",
			ButtonMain: {
				mainMarket: "To the market",
				mainJoin: "Join",
			},
		},
		Video: {
			headerVideo: "What is The Gate?",
			ButtonVideo: {
				moment: "MOMENT 1.0",
			},
		},
		Trade: {
			headerTrade: "A new era of  liquidity cell trading",
			descriptionTrade:
				"Affordable trading for everyone, use automated trading to increase your budget",
			ButtonTrade: {
				marketTrade: "To the market",
			},
		},
		Profitability: {
			headerProfitability: "Unleash your expected profitability",
			descriptionProfitability: "Earn a stable income with us today.",
		},
		Referral: {
			headerReferral: "Referral program",
		},
		Questions: {
			headerQuestions: "Frequently Asked Questions",
		},

		Footer: {
			gateFooter: {
				tradeGate: "Trade liquidity cells for fun and earning",
			},
			UsefullLinksFooter: {
				usefullLinks: "Usefull Links",
				homeUsefull: "Home",
				marketUsefull: "Market",
				tradeUsefull: "Trade",
				faqUsefull: "FAQ",
				termsUsefull: "Terms & Services",
			},
			CommunityFooter: {
				community: "Community",
				help: "Help Center",
				doc: "Documentation",
				blog: "Blog",
				newsletters: "Newsletters",
			},
			PartnerFooter: {
				partner: "partner",
				ourPartner: "Our Partner",
				becomePartner: "Become a Partner",
			},
		},
	},
	ru: {
		navigation: {
			home: "Дом",
			market: "Маркет",
			trade: "Торговля",
			faq: "FAQ",
			ButtonNavigation: {
				joinNavigation: "Присоединиться",
				marketNavigation: "Торговля",
			},
		},
		main: {
			mainText: "Торгуйте ячейками ликвидности ради удовольствия и заработка",
			descriptionMain:
				"Будьте впереди других трейдеров и энтузиастов криптовалюты",
			ButtonMain: {
				mainMarket: "На Маркет",
				mainJoin: "Присоединиться",
			},
		},
		Video: {
			headerVideo: "Что такое Gate?",
			ButtonVideo: {
				moment: "MOMENT 1.0",
			},
		},
		Trade: {
			headerTrade: "Новая эра торговли ячейками ликвидности",
			descriptionTrade:
				"Доступная торговля для всех. Используйте автоматическую торговлю, чтобы увеличить свой бюджет.",
			ButtonTrade: {
				marketTrade: "На Маркет",
			},
		},
		Profitability: {
			headerProfitability: "Раскройте ожидаемую прибыльность",
			descriptionProfitability:
				"Получайте стабильный доход вместе с нами уже сегодня.",
		},
		Referral: {
			headerReferral: "Реферальная программа",
		},
		Questions: {
			headerQuestions: "Часто задаваемые вопросы",
		},

		Footer: {
			gateFooter: {
				tradeGate:
					"Торгуйте ячейками ликвидности ради удовольствия и заработка",
			},
			UsefullLinksFooter: {
				usefullLinks: "Полезные ссылки",
				homeUsefull: "Дом",
				marketUsefull: "Маркет",
				tradeUsefull: "Торговля",
				faqUsefull: "FAQ",
				termsUsefull: "Условия и услуги",
			},
			CommunityFooter: {
				community: "Сообщество",
				help: "Центр помощи",
				doc: "Документация",
				blog: "Блог",
				newsletters: "Новости",
			},
			PartnerFooter: {
				partner: "партнёр",
				ourPartner: "Наш партнёр",
				becomePartner: "Стать партнёром",
			},
		},
	},
};
// nice select
$(document).ready(function () {
	$("select").niceSelect();
});
// localStorage.setItem("lang");

// let langs = localStorage.getItem("lang");
// $("#mySelect").on("change", function () {
// 	let selectedValue = $(this).val();
// 	localStorage.setItem("lang", selectedValue);
// 	location.reload();
// });
if (langs == "en") {
	// $(".list li:first").addClass("selected");
	$(".mySelect option:first").attr("selected", "selected");
	// $(".mySelect option:last").removeAttr("selected");
	console.log(1);
} else if (langs == "ru") {
	// $(".list li:last").addClass("selected");
	$(".mySelect option:last").attr("selected", "selected");
	// $(".mySelect option:first").removeAttr("selected");
	console.log(2);
}
function setLanguage(lang) {
	const langData = local[lang]; // Get localization data for the selected language

	// Update navigation links
	$('header a[href="#home"]').text(langData.navigation.home);
	$('header a[href="#market"]').text(langData.navigation.market);
	$('header a[href="#trade"]').text(langData.navigation.trade);
	$('header a[href="#faq"]').text(langData.navigation.faq);
	$(".header_buttons .login").text(
		langData.navigation.ButtonNavigation.joinNavigation
	);
	$(".header_buttons .market").text(
		langData.navigation.ButtonNavigation.marketNavigation
	);

	// Update main section
	$(".hero_title").html(langData.main.mainText);
	$(".hero_desc").text(langData.main.descriptionMain);
	$(".hero_buttons .hero_market").text(langData.main.ButtonMain.mainMarket);
	$(".hero_buttons .hero_join").text(langData.main.ButtonMain.mainJoin);
	$(".video_title").text(langData.Video.headerVideo);
	$(".moment ").text(langData.Video.ButtonVideo.moment);

	$(".trading_left_title .blue").text(langData.Trade.headerTrade);

	$(".trading_left_desc").text(langData.Trade.descriptionTrade);
	$(".profit_title .blue").text(langData.Profitability.headerProfitability);
	$(".prof_desc").text(langData.Profitability.descriptionProfitability);
	$(".trading_left_btn span").text(langData.Trade.ButtonTrade.marketTrade);
	$(".referal_title").text(langData.Referral.headerReferral);
	$(".faq_title").text(langData.Questions.headerQuestions);
	$(".footer_desc").text(langData.Footer.gateFooter.tradeGate);

	// Update useful links
	const $usefulLinks = $(".footer_item:eq(0) .nav_item");

	// Update useful links
	$(".footer_top_name:first").text(
		langData.Footer.UsefullLinksFooter.usefullLinks
	);
	$usefulLinks
		.eq(0)
		.find("a")
		.text(langData.Footer.UsefullLinksFooter.homeUsefull);
	$usefulLinks
		.eq(1)
		.find("a")
		.text(langData.Footer.UsefullLinksFooter.marketUsefull);
	$usefulLinks
		.eq(2)
		.find("a")
		.text(langData.Footer.UsefullLinksFooter.tradeUsefull);
	$usefulLinks
		.eq(3)
		.find("a")
		.text(langData.Footer.UsefullLinksFooter.faqUsefull);
	$usefulLinks
		.eq(4)
		.find("a")
		.text(langData.Footer.UsefullLinksFooter.termsUsefull);

	// Update community links
	const $communityLinks = $(".footer_item:eq(1) .nav_item");
	$(".community").text(langData.Footer.CommunityFooter.community);
	$communityLinks.eq(0).find("a").text(langData.Footer.CommunityFooter.help);
	$communityLinks.eq(1).find("a").text(langData.Footer.CommunityFooter.doc);
	$communityLinks.eq(2).find("a").text(langData.Footer.CommunityFooter.blog);
	$communityLinks
		.eq(3)
		.find("a")
		.text(langData.Footer.CommunityFooter.newsletters);

	// Update partner links
	const $partnerLinks = $(".footer_item:eq(2) .nav_item");
	$(".partner").text(langData.Footer.PartnerFooter.partner);
	$partnerLinks.eq(0).find("a").text(langData.Footer.PartnerFooter.ourPartner);
	$partnerLinks
		.eq(1)
		.find("a")
		.text(langData.Footer.PartnerFooter.becomePartner);
}

// Example: Set initial language to English (en) when document is ready
$(document).ready(function () {
	setLanguage(langs);
});
