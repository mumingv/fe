// 操作'选取结果'中的每一个元素

$(document).ready(function() {
    $('li').each(function() {
        var ids = this.id;
        $(this).append(' <span class="order">' + ids + '</span>');
    });
});
