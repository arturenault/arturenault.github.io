$(function() {
	var url = document.URL;
	if (!window.mobilecheck()) {
		$("#slider").css("display", "none");
		if (url.substring(url.length - 4) == "next") {
			$("#slider").show("slide", {easing: "easeInCubic", direction: "right"});
		} else {
			$("#slider").show("slide", {easing: "easeInCubic", direction: "left"});
		}
		$("a").not(".no-animation").not("#next").click(function(event){
			event.preventDefault();
			var href = this.href;
			$("#slider").hide("slide", {easing: "easeOutCubic", direction: "right"}, function() {
				window.location = href;
			});
		});
		$("#next").click(function(event){
			event.preventDefault();
			var href = this.href;
			$("#slider").hide("slide", {easing: "easeOutCubic", direction: "left"}, function() {
				window.location = href;
			});
		})
	}
});