// jQurey初体验

// 选中所有的h1到h6元素，并在class属性中加入headline
$(':header').addClass('headline');
// 选中前三个li元素
$('li:lt(3)').hide().fadeIn(1500);
// 在每个li元素上设置事件监听器
$('li').on('click', function() {
    $(this).remove();
});
