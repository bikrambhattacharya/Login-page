function check(){
		var user=document.getElementById('user').value;
		var code=document.getElementById('code').value;
		if(user==''){
			alert("User name not entered")
		}
		else if(code==''){
			alert("password field cannot be empty")
		}
		else{
			alert("welcome to Codebook")
		}
}
// $(".strength-wrapper").css("visibility", "hidden"); 
//   $("#password-one").bind("keyup", function() {
//     if ($(this).val().length === 0) {
//       $(".strength-wrapper").css("visibility", "hidden");
//       $("#passwordStrengthString").html("");
//     } else {
//       $(".strength-wrapper").css("visibility", "visible");
//     }
//     var check = ["[A-Z]", "[a-z]", "[0-9]", "[$@$!%*#?&]"];
//     var checkCounter = 0;
//     for (var i = 0; i < check.length; i++) {
//       if (new RegExp(check[i]).test($(this).val())) {      
//         checkCounter++;
//       }
//     }
//     if (checkCounter > 2 && $(this).val().length > 8) {
//       checkCounter++;
//     }
//     var passwordStrength = "";
//     switch (checkCounter) {
//       case 0:
//       case 1:
//         passwordStrength = "Weak";
//         $(".weak").css("background-color", "#E53935");
//         $(".good").css("background-color", "#EEEEEE");
//         $(".strong").css("background-color", "#EEEEEE");
//         $(".verystrong").css("background-color", "#EEEEEE");
//         $("#passwordStrengthString").css("color", "#E53935");
//         break;
//       case 2:
//       case 3:
//         passwordStrength = "Good";
//         $(".weak").css("background-color", "#FFEB3B");
//         $(".good").css("background-color", "#FFEB3B");
//         $(".strong").css("background-color", "#EEEEEE");
//         $(".verystrong").css("background-color", "#EEEEEE");
//         $("#passwordStrengthString").css("color", "#FFEB3B");
//         break;
//       case 4:
//         passwordStrength = "Strong";
//         $(".weak").css("background-color", "#64DD17");
//         $(".good").css("background-color", "#64DD17");
//         $(".strong").css("background-color", "#64DD17");
//         $(".verystrong").css("background-color", "#EEEEEE");
//         $("#passwordStrengthString").css("color", "#64DD17");
//         break;
//       case 5:
//         passwordStrength = "Very Strong";
//         $('.weak, .good, .strong, .verystrong').css({
//     background: '#2E7D32'
//         });
//         $("#passwordStrengthString").css("color", "#2E7D32");
//         break;
//     }
//     $("#passwordStrengthString").html(passwordStrength);
//   });
