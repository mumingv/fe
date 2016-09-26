// 获取元素内容: text()

$(function() {
    var $listText = $('ul').text();
    $('ul').append('<p>' + $listText + '</p>');
});
