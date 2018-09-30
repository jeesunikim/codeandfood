(function(window, document, $, undefined) {
	$(function() {
		window.onbeforeunload = function() {
			window.scrollTo(0, 0);
		};
	});
})(window, document, jQuery);
