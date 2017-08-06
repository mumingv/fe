import Vue from 'vue'
import App from './App'

new Vue({
	el: '#app',
	// vue2.0需要使用render方法渲染外部引入的App组件，这个是ES6的写法（函数只有一个参数时可以这样简写）
	// render: h => h(App)
	// 等价于：
	render: function(h) {
		return h(App)
	}
})