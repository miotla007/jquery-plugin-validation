

$('#textInput').keyup(function () {


	$('#textInput').myValidation("regexp", 
		{ 
			"pattern": "^[A-Z]\\w+",
			"onValid": function( that ) {
				//do sth with that
				$(that).parent().removeClass("has-error");
				$(that).parent().addClass("has-success");
			},
			"onNotValid": function( that ) {
				//do sth with that
				$(that).parent().addClass("has-error");
			}		
		}
	);//.css({"background": "red"});

});

$('#emailInput').keyup(function () {


	$('#emailInput').myValidation("email", 
		{ 
			"onValid": function( that ) {
				//do sth with that
				$(that).parent().removeClass("has-error");
				$(that).parent().addClass("has-success");
			},
			"onNotValid": function( that ) {
				//do sth with that
				$(that).parent().addClass("has-error");
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
				//do sth with that
				$(that).parent().removeClass("has-error");
				$(that).parent().addClass("has-success");
			},
			"onNotValid": function( that ) {
				//do sth with that
				$(that).parent().addClass("has-error");
			}		
		}
	);//.css({"background": "red"});

});