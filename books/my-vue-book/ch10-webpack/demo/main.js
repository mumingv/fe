// 不能写成：import 'style.css';
// 重要提醒：即使将css打包到一个单独的文件中，这里的 import './style.css'; 也不能删除。
// import './style.css';
// document.getElementById('app').innerHTML = 'Hello webpack.';

// 导入Vue框架
import Vue from 'vue';
// 导入app.vue组件
import App from './app.vue';

// 创建Vue根实例
new Vue({
	// 将Vue实例挂载到index.html中的id为app的html节点上
	el: '#app',
	// 使用导入的app.vue组件渲染页面
	render: h => h(App)
});