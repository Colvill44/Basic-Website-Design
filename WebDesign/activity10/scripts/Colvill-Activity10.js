$(document).ready(function() {


        // preload the image for each link
		$("#image_list a").each(function(){
			var newImage = new Image();
			newImage.src = $(this).attr("href");
		});
        // set up the event handlers for each link
		$("#image_list a").click(function(evt){
			var url = $(this).attr("href");
			var caption = $(this).attr("title");			
			$("#caption").fadeOut(3000);			
			$("#image").fadeOut(3000,
				function(){
					$("#caption").text(caption).fadeIn(3000);
					$("#image").attr("src", url).fadeIn(3000);
					$("#caption").animate({
						"font-size": "2.0em"
						}, 3000);
				});
				
    			

            // cancel the default action of each link
			evt.preventDefault();
		});
	// move the focus to the first link
	$("li:first-child a").focus();
    

}); // end ready