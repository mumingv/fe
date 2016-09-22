// 根据元素的类名获取元素对象(element对象)的集合(NodeList)
// NodeList具有length属性和item()方法
var elements = document.getElementsByClassName('hot');

// NodeList是一组元素节点的集合，可以通过索引编号访问数组元素的方式获取集合中的某个节点
if (elements.length > 2)  {
    var el = elements[2];
    el.className = 'cool';
}
