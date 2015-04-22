$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 85) {
		$("header").addClass("small");
	} else {
		$("header").removeClass("small");
	}
});

$(document).ready(function() {
	$("#my-menu").mmenu({
     // options
 }, {
     // configuration
     offCanvas: {
     	pageNodetype: "section"
     }
 });
	$("#my-menu").mmenu();
	$("#my-menu").mmenu({
		slidingSubmenus: false
	});
	
	$("#my-menu").mmenu();
	$("#my-button").click(function() {
		$("#my-menu").trigger("close.mm");
	});
});