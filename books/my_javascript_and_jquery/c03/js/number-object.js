// Number对象的使用
var originalNumber = 10.23456;

var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';  // toFixed指定小数点后的位数
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';  // toPrecision指定整体Number的位数

var el = document.getElementById('info');
el.innerHTML = msg;
