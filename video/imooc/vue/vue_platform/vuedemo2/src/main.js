// 引入库'vue'，import关键字是ES6的语法，类似于之前的require关键字
import Vue from 'vue'

// 子子组件对象
var myHeaderChild = {
	template: '<p>i am my header child. {{ name }} </p>',
	data: function() {
		return {
			name: 'Henry'
		}
	}
}

// 子组件对象
var myHeader =  {
	template: '<p><my-header-child></my-header-child>this is my header</p>',
	components: {
		'my-header-child': myHeaderChild
	}
}

// 实例化一个Vue对象，将Vue组件加入到页面上，这里的'new Vue'是一个根组件
new Vue({
	el: '#app',
	data: {
		word: 'hello world2'  // 数据渲染，这里的word对应模版中的{{ word }}
	},
	// 子组件（非全局组件）
	components: {
		'my-header': myHeader
	}
})