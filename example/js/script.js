
var x,y,z;
$(".btn").attr("disabled",true);
$('#textInput').keyup(function () {


	$('#textInput').myValidation("regexp", 
		{ 
			"pattern": "^[A-Z]\\w+",
			"onValid": function( that ) {
				x=1;
				$(that).parent().removeClass("has-error");
				$(that).parent().addClass("has-success");
				if(x+y+z===3){
					$(".btn").attr("disabled",false);
				}
			},
			"onNotValid": function( that ) {
				x=0;
				$(that).parent().addClass("has-error");
				if(x+y+z!=3){
					$(".btn").attr("disabled",true);
				}
			}		
		}
	);//.css({"background": "red"});

});

$('#emailInput').keyup(function () {


	$('#emailInput').myValidation("email", 
		{ 
			"onValid": function( that ) {
				y=1;
				$(that).parent().removeClass("has-error");
				$(that).parent().addClass("has-success");
				if(x+y+z===3){
					$(".btn").attr("disabled",false);
				}
			},
			"onNotValid": function( that ) {
				y=0;
				$(that).parent().addClass("has-error");
				if(x+y+z!=3){
					$(".btn").attr("disabled",true);
				}
			}		
		}
	);//.css({"background": "red"});

});

$('#passwordInput').keyup(function () {


	$('#passwordInput').myValidation("passwd", 
		{ 
			"small": true,
			"big": true,
			"onValid": function( that ) {
				z=1;
				$(that).parent().removeClass("has-error");
				$(that).parent().addClass("has-success");
				if(x+y+z===3){
					$(".btn").attr("disabled",false);
				}
			},
			"onNotValid": function( that ) {
				z=0;
				$(that).parent().addClass("has-error");
				if(x+y+z!=3){
					$(".btn").attr("disabled",true);
				}
			}		
		}
	);//.css({"background": "red"});

});