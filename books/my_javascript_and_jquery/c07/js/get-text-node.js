// 获取元素内容: text()

$(function() {
    // 获取ul元素下的所有text
    var $listItemText = $('li').text();
    // 给所有li元素附加获取到的text
    $('li').append('<i>' + $listItemText + '</i>');
});
