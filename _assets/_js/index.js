import "./../_scss/style.scss";
import StickyNav from "./components/stickyNav";
import PageAnimation from "./components/pageAnimation";

class CodeandFood {
	constructor() {
		this.StickyNav = new StickyNav();
		this.PageAnimation = new PageAnimation();

		this.init();
		// console.log('GridAnimation: ', GridAnimation)
	}

	init() {

	}
}

const app = new CodeandFood();
