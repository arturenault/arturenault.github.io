$(function() {
	$("#slider").css("display", "none");
	$("#slider").show("slide", {easing: "easeInCubic"});
	$("a").not(".menu-icon").click(function(event){
		event.preventDefault();
		var href = this.href;
		$("#slider").hide("slide", {easing: "easeOutCubic", direction: "right"}, function() {
			window.location = href;
		});
	});
});