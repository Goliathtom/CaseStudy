var searchstring="";

$(document).ready(function(){
    $( "#from_search" ).autocomplete({
      source: citiesnames
    });
    $( "#to_search" ).autocomplete({
      source: citiesnames
    });
	  $( "#search_datepicker" ).datepicker({
      numberOfMonths: 2,
      showButtonPanel: true
    });
    $( document ).tooltip();
});

function SearchTrain(){
  $("#search_body").children().remove();
  var from = $("#from_search").val();
  var to = $("#to_search").val();
  var date = $("#search_datepicker").val();
  var con_bed=0;
  var con_cafe=0;
  var con_shower=0;
  var con_tfd =0;
  var con_video = 0;
  if($("#con_bed").hasClass("active")){
    con_bed = 1;
  }
  console.log(con_bed);
  if($("#con_cafe").hasClass("active")){
    con_cafe = 1;
  }
  console.log(con_cafe);
  if($("#con_shower").hasClass("active")){
    con_shower = 1;
  }
  console.log(con_shower);
  if($("#con_tfd").hasClass("active")){
    con_tfd = 1;
  }
  console.log(con_tfd);
  if($("#con_video").hasClass("active")){
    con_video = 1;
  }
  console.log(con_video);
  var _trainlist = trainlist;
  console.log(_trainlist);

  searchstring="";

  for(var i=0; i<_trainlist.length;i++){
    
    if((_trainlist[i].sbed==con_bed)
      ||(_trainlist[i].scafe==con_cafe)
      ||(_trainlist[i].sshwr==con_shower)
      ||(_trainlist[i].stfd==con_tfd)
      ||(_trainlist[i].svideo==con_video)){
      searchstring+="<tr>";
      searchstring+="<td class=''>"+from+"</td>";
      searchstring+="<td class=''>"+to+"</td>";
      searchstring+="<td class=''>"+_trainlist[i].dtime+"</td>";
      searchstring+="<td class=''>"+_trainlist[i].atime+"</td>";
      searchstring+="<td class=''>"+_trainlist[i].spend+"</td>";
      searchstring+="<td class='item_fac inline-content'>";
      if(_trainlist[i].scafe==1){
        searchstring+="<img src='image/facility/cafe.gif' title='Cafeteria'>"
      }
      if(_trainlist[i].sbed==1){
        searchstring+="<img src='image/facility/bed.gif' title='Sofa Seat'>"
      }
      if(_trainlist[i].stfd==1){
        searchstring+="<img src='image/facility/tfd.gif' title='Toilet for the disabled'>"
      }
      if(_trainlist[i].sshwr==1){
        searchstring+="<img src='image/facility/shower.gif' title='Facility for Shower'>"
      }
      if(_trainlist[i].svideo==1){
        searchstring+="<img src='image/facility/video.gif' title='Video available'>"
      }
      searchstring+="</td>";
      searchstring+="</tr>";
    }
    
  }
  //console.log(searchstring);
  $("#search_body").append(searchstring);
}

