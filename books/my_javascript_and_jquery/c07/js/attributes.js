// 获取和设置CSS属性

$(function() {
    // 从class属性中移除一个属性值
    $('li#three').removeClass('hot');
    // 向class属性中增加一个属性值
    $('li.hot').addClass('favorite');
    // 增加id属性，属性值为group
    $('ul').attr('id', 'group');
});
