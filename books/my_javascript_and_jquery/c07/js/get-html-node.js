// 获取元素内容: html()

$(function() {
    // 获取第一个li元素的HTML
    var $listItemHTML = $('li').html();
    // 给所有li元素附加HTML
    $('li').append('<i>' + $listItemHTML + '</i>');
});
