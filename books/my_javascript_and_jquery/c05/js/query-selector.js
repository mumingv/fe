// querySelector根据CSS选择器获取元素对象(element对象), 如果存在多个元素对象, 则只返回第一个
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll根据CSS选择器获取元素对象(element对象)的集合
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
