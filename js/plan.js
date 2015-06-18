$(document).ready(function(){
	$(".plan").on("click", function(ev){
		ev.preventDefault();
		ev.stopPropagation();
		$.get("./js/plan_b.json", function(data){
			// Price is 10% discount!!
			//var arr = [3000, 20000, 100000, 150000, 300000, 100000]; 
			//JSONから取得して、この配列↑のように格納するには？
			var arr = data.map(function(e){return e.price});
			data.map(function(e){return e.price * 1.1}); //10%増しの場合
			var result = jQuery.map(arr, function(elem, index){return elem - (elem * 0.1)});
			console.log(result);

			window.data =　data;
			if (!window.loaded){
					for(var i in data){
						$("tbody").append("<tr class=" + i + ">" + 
						"<td>" + data[i].id + "</td>" + 
						"<td>" + data[i].name + "</td>" + 
						"<td>" + data[i].price + "</td>" + 
						"<td>" + data[i].recordable_recs_num + "</td>" + 
						"</tr>");
						window.loaded = true;
					};


	$(".plan-add").on("click", function(){
		var add_array = new Array();
		add_array = [$('.ID'), $('.Name'), $('.Rec_Pvs'), $('.Rec_Recs')];
		$("tbody").append("<tr class=" + 2 + ">" + 
						"<td>" + add_array[0].val() + "</td>" + 
						"<td>" + add_array[1].val() + "</td>" +
						"<td>" + add_array[2].val() + "</td>" +
						"<td>" + add_array[3].val() + "</td>" + 
						"</tr>");
	});
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