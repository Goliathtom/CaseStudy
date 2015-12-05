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

    $(".dropdown-time li a").click(function(){
	  var selText = $(this).text();
	  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});
});