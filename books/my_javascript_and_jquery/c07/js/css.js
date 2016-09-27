// 获取和设置CSS属性

$(function() {
    // 获取CSS属性：背景色
    var backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was: ' + backgroundColor + '</p>');
    
    // 设置CSS属性
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'text-shadow': 'none',
        'font-family': 'Georgia',
        'padding-left': '+=75'  // 最后一个CSS属性行后面不需要增加逗号
    });
});
