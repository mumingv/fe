// 参考：http://www.runoob.com/jsref/jsref-obj-date.html
// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
var Time = {
	// 获取当前的时间戳
	getUnix: function () {
		var date = new Date();
		return date.getTime();
	},

	// 获取今天0点0分0秒的时间戳
	getTodayUnix: function () {
		var date = new Date();
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date.getTime();
	},

	// 获取今年1月1日0点0分0秒的时间戳
	getYearUnix: function () {
		var date = new Date();
		// 1-12月的对应取值为：0-11
		date.setMonth(0);
		date.setDate(1);
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date.getTime();
	},

	// 获取标准年月日
	getLastDate: function (time) {
		var date = new Date(time);
		var month = date.getMonth() + 1;
		var month = month  < 10 ? '0' + month : month;
		var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		return date.getFullYear() + '-' + month + '-' + day;
	},

	// 转换时间
	getFormatTime: function(timestamp) {
		// 当前时间戳
		var now = this.getUnix();
		// 今天0点的时间戳
		var today = this.getTodayUnix();
		// 今年0点的时间戳
		var year = this.getYearUnix();
		// 转换为秒级时间戳
		var timer = (now - timestamp) / 1000;
		// 时间提示
		var tip = '';

		if (timer <= 0) {
			tip = '刚刚';
		} else if (Math.floor(timer / 60) <= 0) {
			tip = '刚刚';
		} else if (timer < 3600) {
			tip = Math.floor(timer / 60) + '分钟前';
		} else if (timer >= 3600 && (timestamp - today >= 0)) {
			tip = Math.floor(timer / 3600) + '小时前';
		} else if (timer / 86400 <= 31) {
			tip = Math.ceil(timer / 86400) + '天前';
		} else {
			tip = this.getLastDate(timestamp);
		}
		return tip;
	}
}

export default {
	bind: function (el, binding) {
		// Time.getFormatTime函数的时间参数单位是毫秒
		el.innerHTML = Time.getFormatTime(binding.value * 1000);
		// 设置定时任务：每60秒刷新一次时间；setInterval是window对象的一个方法。
		// __timeout__是el的一个临时变量，存储setInterval返回的intervalID。
		// 参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval
		el.__timeout__ = setInterval(function () {
			el.innerHTML = Time.getFormatTime(binding.value * 1000);
		}, 600000);
	},
	unbind: function (el) {
		clearInterval(el.__timeout__);
		delete el.__timeout__;
	}
}