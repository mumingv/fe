// 创建对象
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function() {
        return this.rooms - this.booked;  // 对象的方法访问该对象的属性时，需要使用this关键字
    }
};

// 更新页面元素的内容
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/
