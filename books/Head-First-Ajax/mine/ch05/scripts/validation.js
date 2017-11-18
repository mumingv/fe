window.onload = initPage;
// 监视器函数使用的变量
var usernameValid = false;
var passwordValid = false;

function initPage() {
	console.log("initPage()");
	document.getElementById("register").disabled = true;
	document.getElementById("username").onblur = checkUsername;
	document.getElementById("password2").onblur = checkPassword;
}

function checkUsername() {
	// 设置提示图标为校验中
	var elUsername = document.getElementById("username");
	elUsername.className = "thinking";

	// 这里的request是全局变量
	usernameRequest = createRequest();
	if (usernameRequest == null) {
		return;
	}
	// 获取用户输入的名称
	var username = elUsername.value;
	var url = "checkName.php?username=" + escape(username);
	usernameRequest.open("get", url);
	usernameRequest.onload = showUserName;
	usernameRequest.send(null);
}

function showUserName() {
	var elUsername = document.getElementById("username");
	var elRegister = document.getElementById("register");
	if (usernameRequest.responseText == "okay") {
		elUsername.className = "approved";
		usernameValid = true;
	} else {
		elUsername.className = "denied";
		usernameValid = false;
	}
	checkFormStatus();
}

function checkPassword() {
	console.log("checkPassword()");
	/**
	 * 检查两次输入的密码是否相等
	 */
	var password1 = document.getElementById("password1");
	var password2 = document.getElementById("password2");

	// 设置提示图标为校验中
	password1.className = "thinking";
	password2.className = "thinking";

	// 前端密码验证
	if ((password1.value == "") || (password1.value != password2.value)) {
		password1.className = "denied";
		password2.className = "denied";
		return;
	}

	/**
	 * 后端密码验证
	 */
	passwordRequest = createRequest();
	if (passwordRequest == null) {
		alert("checkPassword(): createRequest() return null.");
		return;
	}
	url = "checkPassword.php?password=" + escape(password1.value);
	passwordRequest.onload = showPasswordStatus;
	passwordRequest.open("get", url);
	passwordRequest.send(null);
}

function showPasswordStatus() {
	console.log("showPasswordStatus()");
	if (passwordRequest.responseText == "okay") {
		console.log("showPasswordStatus(): okay.")
		document.getElementById("password1").className = "approved";
		document.getElementById("password2").className = "approved";
		passwordValid = true;
	} else {
		console.log("showPasswordStatus(): denied.")
		document.getElementById("password1").className = "denied";
		document.getElementById("password2").className = "denied";
		passwordValid = false;
	}
	checkFormStatus();
}

function checkFormStatus() {
	if (usernameValid && passwordValid) {
		document.getElementById("register").disabled = false;
	} else {
		document.getElementById("register").disabled = true;
	}
}
