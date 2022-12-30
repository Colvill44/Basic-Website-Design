$(document).ready(function(){

    let url = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=" +
	"json&jsoncallback=?&tags=vectacorpbuilding";

    $.getJSON(url, function(data) {
        let pics = "";

        $.each(data.items, function(i, item){
            pics += "<a href='" + item.media.m + "' data-lightbox='images" + "' data-title='" + 
			item.title + "'>" + "<img src='" + item.media.m + "'/></a>";
            pics += "<p></p>";
            });

        $("#new_building").html(pics);
        // document.getElementById("new_building").innerHTML = pics;

    });

});