// 仅获取或更新文本：innerText(避免使用) vs textContent

// 这两种方法都用来获取或更新元素(及其子元素)中的文本
// innerText不会返回任何被CSS隐藏的内容

var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';
