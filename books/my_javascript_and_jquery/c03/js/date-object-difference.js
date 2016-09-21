// Date对象的使用
var today = new Date();  // 默认使用当前日期和时间构造对象
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');  // 用户指定日期和时间

var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);  // 31556900000为一年的毫秒数(非闰年)

var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';
