var searchinfo;

$(document).ready(function(){
	$( document ).tooltip();
	console.log(searchinfo);
	MakeTable();
	console.log(trainlist);
	MakeTrainTable();
	// searchinfo = GetDataQuery();
	$(".detail_btn").click(function(){
		$("#timetable_body").find("#price_container").remove();
		$("#timetable_body").find(".activeitem").addClass("items");
		$("#timetable_body").find(".activeitem").removeClass("activeitem");

		$(this).parent().parent().addClass("activeitem");
		$(this).parent().parent().removeClass("items");

		var detail_string="<div id='price_container' class='col-md-12 col-xs-12'>";
		detail_string+=		"<table id='price_table' class='col-md-12 col-xs-12'>";
		detail_string+=			"<thead>";
		detail_string+=				"<tr><th></th><th>Promo</th><th>Ida y Vuelta</th><th>Promo+</th><th>Flexible</th</t</thead>";
		detail_string+=			"<tbody id='price_body'>";
		detail_string+=				"<tr>";
		detail_string+=					"<td>Turismo</td>";
		detail_string+=					"<td class='ticket'>55</td>";
		detail_string+=					"<td class='ticket'>60</td>";
		detail_string+=					"<td class='ticket'>65</td>";
		detail_string+=					"<td class='ticket'>70</td>";
		detail_string+=				"</tr>";
		detail_string+=				"<tr>";
		detail_string+=					"<td>Turismo Plus</td>";
		detail_string+=					"<td class='ticket'>55</td>";
		detail_string+=					"<td class='ticket'>60</td>";
		detail_string+=					"<td class='ticket'>65</td>";
		detail_string+=					"<td class='ticket'>70</td>";
		detail_string+=				"</tr>";
		detail_string+=				"<tr>";
		detail_string+=					"<td>Preferente</td>";
		detail_string+=					"<td class='ticket'>55</td>";
		detail_string+=					"<td class='ticket'>60</td>";
		detail_string+=					"<td class='ticket'>65</td>";
		detail_string+=					"<td class='ticket'>70</td>";
		detail_string+=				"</tr>";
		detail_string+=			"</tbody>";
		detail_string+=		"</table>";
		detail_string+=		"<div id='buyticket_container' class='col-md-12 col-xs-12'>";
		detail_string+=			"<span class='col-md-10 col-xs-10'><a href='#'>Have you discount code?</a></span>";
		detail_string+=			"<button id='buy_btn' class='col-xs-2 col-md-2 btn btn-default btn-lg'>Buy</button>";
		detail_string+=		"</div>";
		detail_string+=	"</div>";

		$(this).parent().parent().append(detail_string);

		$(".ticket").click(function(){
			$("#price_body").find(".checked").removeClass("checked");
			$(this).addClass("checked");
		});

		$("#buy_btn").click(function(){
			console.log("click");
			location.replace("buying4.html");
		});
	});

	// console.log(searchinfo);
});
  function MakeTrainTable(){
  	//$("#timetable").find("tbody").children().remove();
  	var string="<button class='btn btn-default detail_btn'><span class='glyphicon glyphicon-menu-down' aria-hidden='true'></span></button>";
  	for(var i=0;i<trainlist.length;i++){
  		trainlist[i].detail=string;
  	}

  	string=""
  	for(var i=0;i<trainlist.length;i++){
  		string+="<div class='items col-md-12 col-xs-12'>"
	  	string+="<p class='col-md-2 col-xs-2'>"+trainlist[i].dtime+"</p>";
	  	string+="<p class='col-md-2 col-xs-2'>"+trainlist[i].atime+"</p>";
	  	string+="<p class='col-md-2 col-xs-2'>"+trainlist[i].spend+"</p>";
	  	string+="<p class='col-md-2 col-xs-2'>"+trainlist[i].mprice+"</p>";
	  	string+="<div class='item_fac col-md-3 col-xs-3'>";
	  	if(trainlist[i].scafe==1){
	  		string+="<img src='image/facility/cafe.gif' title='Cafeteria'>"
	  	}
	  	if(trainlist[i].sbed==1){
	  		string+="<img src='image/facility/bed.gif' title='Sofa Seat'>"
	  	}
	  	if(trainlist[i].stfd==1){
	  		string+="<img src='image/facility/tfd.gif' title='Toilet for the disabled'>"
	  	}
	  	if(trainlist[i].sshwr==1){
	  		string+="<img src='image/facility/shower.gif' title='Facility for Shower'>"
	  	}
	  	if(trainlist[i].svideo==1){
	  		string+="<img src='image/facility/video.gif' title='Video available'>"
	  	}
	  	string+="</div>";
	  	string+="<p class='col-md-1 col-xs-1'>"+trainlist[i].detail+"</p></div>";
	  }

  	$("#timetable_body").append(string);
  }
