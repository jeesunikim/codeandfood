const MAX_SCROLL_TOP = 187;

export default class StickyNav {
	constructor() {
		this.isSticky = false;
		this.header = document.querySelector(".site-header");
		this.box = this.header.querySelector(".box");
		this.boxTitle = this.box.querySelectorAll(".title");

		this.defaultNavHeight = this.header.clientHeight;
		this.defaultBoxHeight = this.box.clientHeight;
		this.defaultBoxTitleHeight = this.boxTitle[0].clientHeight;
		
		this.mobile = this.header.querySelector(".inner");

		this.onScroll = this.onScroll.bind(this);

		window.addEventListener("scroll", this.onScroll);
	}

	onScroll() {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop,
			newNavHeight, newBoxHeight, newBoxTitleHeight;

		newNavHeight = this.defaultNavHeight - scrollTop;
		newBoxHeight = this.defaultBoxHeight - scrollTop;
		newBoxTitleHeight = this.defaultBoxTitleHeight - scrollTop / 3;

		this.boxTitle.forEach(boxEl => {
			boxEl.style.lineHeight = newBoxTitleHeight + "px";
		})

		this.header.style.lineHeight = newNavHeight + "px";
		this.box.style.height = newBoxHeight + "px";

		if(scrollTop > MAX_SCROLL_TOP) {
			this.setSticky();
		} else {
			this.removeSticky();
		}
	}

	setSticky() {
		this.isSticky = true;
		this.header.classList.add("is--fixed");
	}

	removeSticky() {
		this.isSticky = false;
		this.header.classList.remove("is--fixed");
	}
}

// 	$(function() {
// 		var nav = new fixedNav();
// 		nav.init();

// 		navSelf.mobile.on("click", function() {
// 			if ($("body").hasClass("hovered")) {
// 				$("body").removeClass("hovered");
// 			} else {
// 				$("body").addClass("hovered");
// 			}
// 		});
// 	});
// })(window, document, jQuery);