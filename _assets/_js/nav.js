(function(window, document, $, undefined) {
	var navSelf,
		fixedNav = function() {};

	fixedNav.prototype.init = function() {
		this.isSticky = false;
		this.header = $("header");
		this.mainNav = this.header.find(".site-nav nav.nav-list");
		this.box = this.header.find(".box");
		this.boxTitle = this.box.find(".title");
		this.bodyContainer = $("body");
		this.scrollPositionStart = 0;
		this.defaultLH = parseInt(this.header.css("line-height"));
		this.defaultBox = parseInt(this.box.css("height"));
		this.defaultBoxTitle = parseInt(this.boxTitle.css("line-height"));
		this.mobile = $(".inner");

		navSelf = this;

		this.bindEvents();
		this.checkSticky();
	};

	fixedNav.prototype.bindEvents = function() {
		this.startScrolling();
	};

	fixedNav.prototype.checkSticky = function() {
		var scrollTop = $(document).scrollTop();

		this.currentLH = parseInt(navSelf.header.css("line-height"));
		this.calculatedLH;

		navSelf.scrollPositionStart;

		if (navSelf.defaultLH > 42 && scrollTop > navSelf.scrollPositionStart) {
			this.calculatedLH = navSelf.defaultLH - scrollTop;
			this.calculatedBox = navSelf.defaultBox - scrollTop;
			this.calculatedBoxTitle = navSelf.defaultBoxTitle - scrollTop / 3;
			if (this.calculatedLH > 42) {
				navSelf.header.css("line-height", this.calculatedLH + "px");
				navSelf.box.css("height", this.calculatedBox + "px");
				navSelf.boxTitle.css(
					"line-height",
					this.calculatedBoxTitle + "px"
				);
			}
			if (scrollTop >= 188 && !this.isSticky) {
				this.setSticky();
			} else if (scrollTop < 188 && this.isSticky) {
				this.setUnsticky();
			}
		} else {
			this.setUnsticky();
			navSelf.header.css("line-height", navSelf.defaultLH + "px");
			navSelf.box.css("height", navSelf.defaultBox + "px");
			navSelf.boxTitle.css("line-height", navSelf.defaultBoxTitle + "px");
		}
	};

	fixedNav.prototype.startScrolling = function() {
		navSelf.bodyContainer.on("scroll", this.onScroll);
		$(window).on("scroll", this.onScroll);
	};

	fixedNav.prototype.onScroll = function() {
		navSelf.checkSticky();
	};

	fixedNav.prototype.setSticky = function() {
		this.isSticky = true;
		navSelf.header.css("line-height", 42 + "px");
		navSelf.header.addClass("fixed");
	};

	fixedNav.prototype.setUnsticky = function() {
		this.isSticky = false;
		navSelf.header.removeClass("fixed");
	};

	$(function() {
		var nav = new fixedNav();
		nav.init();

		navSelf.mobile.on("click", function() {
			if ($("body").hasClass("hovered")) {
				$("body").removeClass("hovered");
			} else {
				$("body").addClass("hovered");
			}
		});
	});
})(window, document, jQuery);