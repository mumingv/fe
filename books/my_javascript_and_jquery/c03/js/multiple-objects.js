// 使用模板函数创建对象
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

// 创建两个对象
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

// 更新页面元素的内容
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/
