function validate() {
	var username = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;

	if(username == "") {
		alert("Please enter username");
		return false;
	}
	else if(password == "") {
		alert("Please enter password");
		return false;
	}
	else {
		alert("Login Successful");
		return true;
	}
}