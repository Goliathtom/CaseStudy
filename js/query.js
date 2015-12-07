  var searchinfo=[
  {"from":"","to":"","fromdate":"","fromtime":"","todate":"","totime":"","padult":"","pchild":"","psenior":"","triptype":""}
  ];
  
  function SendDataQuery(_from, _to, _fromdate, _fromtime, _todate, _totime, _padult, _pchild, _psenior, _triptype){
  	searchinfo.from = _from;
  	searchinfo.to = _to;
  	searchinfo.fromdate = _fromdate;
  	searchinfo.fromtime = _fromtime;
  	searchinfo.todate = _todate;
  	searchinfo.totime = _totime;
  	searchinfo.padult = _padult;
  	searchinfo.pchild = _pchild;
  	searchinfo.psenior = _psenior;
  	searchinfo.triptype = _triptype;

  	console.log(searchinfo);
    location.replace("buying1.html");
  }

  function MakeTable(){
  	$("#info_table").find("tbody").children().remove();

  	var string="<tr><td class='col-md-2'>"+searchinfo[0].from+"</td>";
  	string+="<td class='col-md-2'>"+searchinfo[0].to+"</td>";
  	string+="<td class='col-md-4'>"+searchinfo[0].fromdate+" ~ "+searchinfo[0].todate+"</td>";
  	string+="<td class='col-md-4'>"+searchinfo[0].padult+" Adults<br>"+searchinfo[0].pchild+" Child<br>"+searchinfo[0].psenior+" Seniors</td></tr>";

  	$("#info_table").find("tbody").append(string);
  }
