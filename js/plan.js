$(document).ready(function(){
	$(".plan").on("click", function(){
		console.log("clicked");
		$.get("./js/plan_b.json", function(data){
			for(var i in data){
				$("tbody").append("<tr class="+i+"><td></td><td>sddd</td><td>sddd</td><td>sddd</td></tr>")
				// $('#ID').html(data[i].id);
				// $('#Name').html(data[i].name);
				// $('#Rec_Pvs').html(data[i].recordable_pvs_num);
				// $('#Rec_Recs').html(data[i].recordable_recs_num);
				// $('#col').html("<td></td>");
			};
		});
	});
});