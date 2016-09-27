// 事件方法

// 几个鼠标事件的区别：
// mouseover: 当鼠标指针穿过备选元素或其子元素时触发
// mouseout: 当鼠标指针离开备选元素或其子元素时触发

$(document).ready(function() {
    var ids = '';
    var $listItems = $('li');

    // 在选取的每一个元素上增加mouseover事件
    $listItems.on('mouseover click', function() {
        ids = this.id;
        // 遍历函数children，用来获取匹配元素集合中的每个元素的所有子元素
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    // 在选取的每一个元素上增加mouseout事件
    $listItems.on('mouseout', function() {
        $(this).children('span').remove();
    });
});
