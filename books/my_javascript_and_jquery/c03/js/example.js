// 使用IIFE(立即调用函数表达式): 此处使用IFFE的目的是防止和其他代码段的变量名产生冲突
// IIFE = Immediately Invoked Function Expression
// IIFE仅在解释器经过它们时执行一次

// IIFE的写法为：(function() {}());
// 1. 最外侧的 (); 表示其为一个表达式
// 2. 右花括号 } 后面的 () 表示立即调用该函数, 无需等待调用

(function() {
    var hotel = {
        name: 'Park',
        roomRate: 240,  // 每晚房费
        discount: 15,  // 折扣：15%
        offerPrice: function() {  // 折扣后的价格
            var offerRate = this.roomRate * (100 - this.discount) / 100;
            return offerRate;
        }
    };

    // 酒店名称，房间价格，房间折后价格
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    
    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();

    // 给用户的提示语
    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        day = dayNames[weekFromToday.getDay()];  // 星期几
        date = weekFromToday.getDate();  // 日
        month = monthNames[weekFromToday.getMonth()];  // 月
        year = weekFromToday.getFullYear();  // 年

        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }
    
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
}());
