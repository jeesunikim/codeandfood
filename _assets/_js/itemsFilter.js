(function(window, document, $, undefined) {
	var filtered,
		filteredNav = function() {};

	filteredNav.prototype.init = function() {
		this.posts = $("ul.posts");
		this.eachPost = this.posts.find("li");
		this.MainNav = $("nav");
		this.EachNav = this.MainNav.find("a");

		filtered = this;

		this.bindEvents();
	};

	filteredNav.prototype.bindEvents = function() {
		this.EachNav.on("click", function() {
			console.log("i am being clicked");
		});
	};

	$(function() {
		var filter = new filteredNav();
		filter.init();

		filtered.EachNav.on("click", function() {
			console.log("hey");
		});
	});
})(window, document, jQuery);