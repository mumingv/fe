// 根据元素的标签名获取元素对象(element对象)的集合(NodeList)
var elements = document.getElementsByTagName('li');

if (elements.length > 0) {
    var el = elements[0];
    el.className = 'cool';
}
