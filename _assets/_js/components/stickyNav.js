const MAX_SCROLL_TOP_DESKTOP = 187;
const MAX_SCROLL_TOP_MOBILE = 60;
const MOBILE_WIDTH = 768;
const CSS_IS_HOVERED = "hovered";

export default class StickyNav {
	constructor() {
		this.isSticky = false;
		this.header = document.querySelector(".site-header");
		this.box = this.header.querySelector(".box");
		this.boxTitle = this.box.querySelectorAll(".title");

		this.mobileScrolledNavMenu = document.querySelector(".hamburger-menu.is--scrolled");
		this.mobile = this.header.querySelector(".mobile-nav");
		this.mobileMenu = this.mobile.querySelector(".hamburger-menu");

		this.defaultNavHeight = this.header.clientHeight;
		this.defaultBoxHeight = this.box.clientHeight;
		this.defaultBoxTitleHeight = this.boxTitle[0].clientHeight;

		this.isDesktop = window.innerWidth > MOBILE_WIDTH;
		
		this.onScroll = this.onScroll.bind(this);
		this.onResize = this.onResize.bind(this);
		this.displayMobileNav = this.displayMobileNav.bind(this);

		window.addEventListener("scroll", this.onScroll);
		window.addEventListener("resize", this.onResize);

		this.mobileMenu.addEventListener("click", this.displayMobileNav);
		this.mobileScrolledNavMenu.addEventListener("click", this.displayMobileNav);

		this.init();
	}

	init() {	
		this.onScroll();
	}

	onResize() {
		this.isDesktop = window.innerWidth > MOBILE_WIDTH;
	}

	displayMobileNav() {
		const body = document.querySelector("body");

		if(body.classList.contains(CSS_IS_HOVERED)) {
			body.classList.remove(CSS_IS_HOVERED);
		}else{
			body.classList.add(CSS_IS_HOVERED);
		}
	}

	onScroll() {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop,
			newNavHeight, newBoxHeight, newBoxTitleHeight, currentMaxScroll;

		currentMaxScroll = this.isDesktop ? MAX_SCROLL_TOP_DESKTOP : MAX_SCROLL_TOP_MOBILE;
		newNavHeight = this.defaultNavHeight - scrollTop;
		newBoxTitleHeight = this.isDesktop ? this.defaultBoxTitleHeight - scrollTop / 3 : this.mobile.clientHeight;
		

		if(this.isDesktop) {
			newBoxHeight = this.defaultBoxHeight - scrollTop;
			this.box.style.height = newBoxHeight + "px";
			this.boxTitle.forEach(boxEl => {
				boxEl.style.lineHeight = newBoxTitleHeight + "px";
			});
		}

		this.header.style.lineHeight = newNavHeight + "px";

		if(scrollTop > currentMaxScroll) {
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