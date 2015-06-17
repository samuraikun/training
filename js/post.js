$(document).ready(function(){
		$(".btn").on("click", function(){
			$.get("./js/sample_0617.json", function(data){
				for(var i in data){
					$("#output").append("<li>" + data[i].country + " (" + "Your Team is " + data[i].result + ") </li>");
				};
			});
	});
});
