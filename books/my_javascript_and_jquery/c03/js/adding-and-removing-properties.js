// 使用字面量语法创建对象
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
};
hotel.gym = true;
hotel.pool = false;
delete hotel.booked;  // 删除booked元素

// 更新页面元素的内容
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

// 设置页面元素的类名
var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 14, but note the security issues on p228-231
*/
