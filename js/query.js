  var searchinfo=[
  {"from":"","to":"","fromdate":"","fromtime":"","todate":"","totime":"","padult":"","pchild":"","psenior":"","triptype":""}
  ];
  var trainlist=[
  {"dtime":"08:00","atime":"10:24","spend":"2h 24m","mprice":"55","scafe":"1","sbed":"0","stfd":"1","sshwr":"0","svideo":"1","detail":""},
  {"dtime":"08:13","atime":"10:38","spend":"2h 25m","mprice":"65","scafe":"0","sbed":"1","stfd":"1","sshwr":"1","svideo":"1","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:55","atime":"11:18","spend":"2h 23m","mprice":"66","scafe":"1","sbed":"0","stfd":"1","sshwr":"0","svideo":"1","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""},
  {"dtime":"08:37","atime":"11:00","spend":"2h 23m","mprice":"85","scafe":"1","sbed":"1","stfd":"1","sshwr":"1","svideo":"0","detail":""}
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
