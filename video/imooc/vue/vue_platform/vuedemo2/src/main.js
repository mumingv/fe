// 引入库'vue'，import关键字是ES6的语法，类似于之前的require关键字
import Vue from 'vue'

// 实例化一个Vue对象，将Vue组件加入到页面上，这里的'new Vue'是一个根组件
new Vue({
	el: '#app',
	template: "<p>hello world {{ word }}</p>",  // 原index.html页面中的div元素会被模版里的p元素替换
	data: {
		word: 'hello world2'  // 数据渲染，这里的word对应模版中的{{ word }}
	}
})