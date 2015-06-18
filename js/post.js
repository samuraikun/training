$(document).ready(function(){
		$(".btn").on("click", function(ev){
			ev.preventDefault();
			ev.stopPropagation();
			$.get("./js/sample_0617.json", function(data){
				for(var i in data){
					$("#output").append("<li>" + data[i].country + " (" + "Your Team is " + data[i].result + ") </li>");
				};
			});
	});
});
