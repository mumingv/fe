// 获取元素内容: html()

$(function() {
    var $listHTML = $('ul').html();
    $('ul').append($listHTML);
});
