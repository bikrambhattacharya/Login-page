function check2(){
	var name=document.getElementById('a1').value;
	var username=document.getElementById('a2').value;
	var password=document.getElementById('a3').value;
	if(name==''){
		alert("Name field cannot be empty")
	}
	else if(username==''){
		alert("Username cannot be empty")
	}
	else if(password==''){
		alert("Please choose a password ")
	}
	else{
		alert("Your account has been created")
	}


}