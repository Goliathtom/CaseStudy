var citiesnames = [
      "A Coruña","Abrantes","Alicante / Alacant","Albacete","Alcantarilla-Los Romanos","Alcázar de San Juan","Algeciras","Almería","Altet Bus","Aguadulce Bus","Andorra-Bus","Antequera (TODAS)","Avila","Badajoz","Barcelona (TODAS)","Benicassim","Bilbao (TODAS)","Bobadilla","Burgos Rosa de Lima","Cáceres", "Cádiz", "Calatayud", "Cartagena", "Castellón /Castelló", "Ciudad Real", "Córdoba", "Cuenca (TODAS)", "Denia-Bus", "Elda-Petrer", "Entroncamento","Estepona Bus","Ferrol","Figueres","Figueres Bus","Figueres Vilafant","Gandía","Gijón","Girona","Granada", "Guadalajara (TODAS)","Huelva","Huesca","Irun","Irun-Hendaya (TODAS)","Iruña/Pamplona","Jaca-Bus","Jaén","Játiva/Xàtiva","Javea-Bus","Jerez de la Frontera","La Hoya","León","Linares-Baeza","Librilla","Lisboa (TODAS)","Lleida","Logroño","Lorca-San Diego","Lorca-Sutullena","Los Arenales Bus","Lugo","Madrid (TODAS)","Málaga María Zambrano","Marbella Bus","Marvao - Beira","Medina del Campo","Mérida","Miranda de Ebro","Monforte de Lemos","Monzón-Río Cinca","Murcia","Navalmoral de la Mata","Oporto-Porto Campanha","Oropesa del Mar/Orpesa","Ourense","Oviedo","Padrón-Barbanza","Palencia","Pamplona/Iruña","Ponferrada","Pontevedra","Portbou","Porto Campanha-Oporto","Puente Genil (TODAS)","Puerto Santa María","Puertollano","Redondela (TODAS)","Reus","Requena / Utiel","Roquetas-Bus","Sahagún","Salamanca (TODAS)","San Fernando (TODAS)","San Sebastián/Donostia","Santa Pola Bus","Santander (TODAS)","Santiago de Compostela","Segovia (TODAS)","Sevilla","Soria","Tarragona (TODAS)","Teruel","Toledo","Tudela de Navarra","Valdepeñas","Valencia (TODAS)","Valladolid Campo Grande","Vielha-Bus","Vigo (TODAS)","Vva. de Córdoba-Los Pedroches","Villena","Villena AV","Vitoria/Gasteiz","Xàtiva/Játiva","Zafra","Zafra Feria","Zamora","Zaragoza (TODAS)"
    ];
$(document).ready(function(){
    $( "#from_input" ).autocomplete({
      source: citiesnames
    });
    $( "#to_input" ).autocomplete({
      source: citiesnames
    });
	  $( "#from_datepicker" ).datepicker({
      numberOfMonths: 2,
      showButtonPanel: true
    });
    $( "#to_datepicker" ).datepicker({
      numberOfMonths: 2,
      showButtonPanel: true
    });
    $(".triptype").click(function(){
      var typeid = $(this).children().attr("name");
      console.log(typeid);
      if(typeid == "one-way"){
        $("#buying_totime").hide();
      }
      else if(typeid == "round"){
        $("#buying_totime").show();
      }
    });

    $(".dropdown-time li a").click(function(){
  	  var selText = $(this).text();
  	  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  	});
    $("#search_btn").click(function(){
      GetSearch();
    });
});
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
  }

  function MakeTable(){
    $("#info_table").find("tbody").children().remove();

    var string="<tr><td>"+searchinfo.from+"</td>";
    string+="<td>"+searchinfo.to+"</td>";
    string+="<td>"+searchinfo.fromdate+" ~ "+searchinfo.todate+"</td>";
    string+="<td>"+searchinfo.padult+" Adults<br>"+searchinfo.pchild+" Child<br>"+searchinfo.psenior+" Seniors</td></tr>";

    $("#info_table").find("tbody").append(string);
  }


function GetSearch(){
  console.log("complete search");
  var searchinfo=[
  {"from":"","to":"","fromdate":"","fromtime":"","todate":"","totime":"","padult":"","pchild":"","psenior":"","triptype":""}
  ];

  var _from=$("#from_input").val();
  var _to=$("#to_input").val();
  var _triptype=$("#buying_body").find(".active").children().attr("name");

  var _fromdate =$("#buying_fromtime").children("input").val();
  var _todate =$("#buying_totime").children("input").val();

  var _fromtime = $("#buying_fromtime").children("div").children("a").text();
  var _totime = $("#buying_totime").children("div").children("a").text();

  var _padult = $("#buying_persons").children().eq(0).children("input").val();
  var _pchild = $("#buying_persons").children().eq(1).children("input").val();
  var _psenior = $("#buying_persons").children().eq(2).children("input").val();
  console.log(_from);
  console.log(_to);
  console.log(_fromdate);
  console.log(_todate);
  console.log(_fromtime);
  console.log(_totime);
  console.log(_padult);
  console.log(_pchild);
  console.log(_psenior);
  //SendDataQuery(_from, _to, _fromdate, _fromtime, _todate, _totime, _padult, _pchild, _psenior, _triptype)
  SendDataQuery(_from, _to, _fromdate, _fromtime, _todate, _totime, _padult, _pchild, _psenior, _triptype);
}