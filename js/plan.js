$(document).ready(function(){
	$(".plan").on("click", function(){
		$.get("./js/plan_b.json", function(data){
			for(var i in data){
				$("tbody").append("<tr class=" + i + ">" + 
					"<td>" + data[i].id + "</td>" + 
					"<td>" + data[i].name + "</td>" + 
					"<td>" + data[i].recordable_pvs_num + "</td>" + 
					"<td>" + data[i].recordable_recs_num + "</td>" + 
					"</tr>");
				
				/*$("tbody").append("<td>" + data[i].id + "</td>");
				$("tbody").append("<td>" + data[i].name + "</td>");
				$("tbody").append("<td>" + data[i].recordable_pvs_num + "</td>");
				$("tbody").append("<td>" + data[i].recordable_recs_num + "</td>" + "</tr>");*/
				
				/*$('#ID').html(data[i].id);
				$('#Name').html(data[i].name);
				$('#Rec_Pvs').html(data[i].recordable_pvs_num);
				$('#Rec_Recs').html(data[i].recordable_recs_num);
				$('#col').html("<td></td>");*/
			};
		});
	});
});