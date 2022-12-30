$(document).ready(function() {
	$("#nav_list a").click(
		function(){
			var json = "json_files/" + $(this).attr("title") + ".json";
			$.getJSON(json, function(data) {
				$.each(data, function(){
					$.each(this, function(key, value){
						$("main").text("");
						$("main").append(
							"<h1>" + value.title + "</h1><img src=':" + value.image + "'><h2>" +
							value.month + "<br>" + value.speaker + "</h2><p>" + value.text + "</p>");
					});
				});
			});
		}
	);
}); // end ready