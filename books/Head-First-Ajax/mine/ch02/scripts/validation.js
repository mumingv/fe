window.onload = initPage;

function initPage() {
	console.log("aaa");
	var elUsername = document.getElementById("username");
	elUsername.onblur = checkUsername;

}

function checkUsername() {
	request = createRequest();
	if (request == null) {
		return;
	}
	// 获取用户输入的名称
	var elUsername = document.getElementById("username");
	var username = elUsername.value;
	var url = "checkName.php?username=" + escape(username);
	request.open("get", url);
	request.onload = showUserName;
	request.send(null);
}

function showUserName() {
	var elUsername = document.getElementById("username");
	var elRegister = document.getElementById("register");
	if (request.responseText == "okay") {
		elUsername.className = "approved";
		elRegister.disabled = false;
	} else {
		elUsername.className = "denied";
		elRegister.disabled = true;
	}
}