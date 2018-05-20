// 导入Vue框架
import Vue from 'vue';
// 路由插件
import VueRouter from 'vue-router';
// 路由配置
import Routers from './router.js';
// 状态管理插件
import Vuex from 'vuex';
// 导入app.vue组件
import App from './app.vue';
// 导入样式
import './style.css';

// 使用路由插件和状态管理插件
Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置
const RouterConfig = {
	// 使用HTML5的History路由模式
	mode: 'history',
	// 注意：这里的属性名称必须是routes，而不是routers！且该属性类型为一个数组。
	routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
});

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

// 状态管理
const store = new Vuex.Store({
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {

	}
});


// 创建Vue根实例
new Vue({
	// 将Vue实例挂载到index.html中的id为app的html节点上
	el: '#app',
	router: router,
	store: store,
	// 使用导入的app.vue组件渲染页面
	render: h => h(App)
});