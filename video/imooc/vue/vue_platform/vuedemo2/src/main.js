// 引入库'vue'，import关键字是ES6的语法，类似于之前的require关键字
import Vue from 'vue'

// 注册全局组件
Vue.component('my-header', {
	template: '<p>this is my header</p>'
})

// 实例化一个Vue对象，将Vue组件加入到页面上，这里的'new Vue'是一个根组件
new Vue({
	el: '#app',
	data: {
		word: 'hello world2'  // 数据渲染，这里的word对应模版中的{{ word }}
	}
})