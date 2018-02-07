var app = new Vue({
	el: '#app',
	data: {
		list: [
			{
				id: 1,
				name: 'iPhone 7',
				price: 6188,
				count: 1
			},
			{
				id: 2,
				name: 'iPad Pro',
				price: 5888,
				count: 1
			},
			{
				id: 3,
				name: 'MacBook Pro',
				price: 21488,
				count: 1
			}
		]
	},
	computed: {
		totalPrice: function () {
			var total = 0;
			for (var i = 0; i < this.list.length; i++) {
				var item = this.list[i];
				total += item.price * item.count;
			}
			// 正则中'(?= )'表示寻找位置，该位置后的数字位数是3的倍数
			return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
		}
	},
	methods: {

	}
});