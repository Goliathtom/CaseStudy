var pay_flag=false;

$(document).ready(function(){
	pay_flag=false;

	$('.image-toggler').click(function(){
        $('.div-toggle').hide();
        $($(this).attr('data-image-id')).show();
    });

    $("#btn_confirm").click(function(e){
    	//Check Payment by Paypal
    	if(pay_flag==false){
    		e.stopPropagation();
    		alert("Not Complete to pay by Paypal");
    		return false;
    	}else{
    		//Query
    		location.replace("buying5.html");
    	}
    });
});

function PaybyPaypal(){
	$(".has-error").hide();
	$(".has-success").show();
	$(".has-success").addClass("complete");
	pay_flag=true;
}
