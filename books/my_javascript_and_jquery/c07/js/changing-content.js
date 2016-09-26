// 修改内容

$(function() {
    // 使用字符串修改内容，text包含字符串'pine'的所有li元素
    $('li:contains("pine")').text('almonds');
    // 使用匿名函数修改内容
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });;
    $('li#one').remove();
});
