// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/Apple'
import Banana from './components/Banana'
import RedApple from './components/RedApple'


Vue.use(VRouter)

Vue.config.productionTip = false

let router = new VRouter({
	routes: [
		{
			path: '/apple',
			component: Apple,
			children: [
				{
					path: 'red',
					component: RedApple
				}
			]
		},
		{
			path: '/banana',
			component: Banana
		}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,  // 两者相等，可以简写为：router,
  template: '<App/>',
  components: { App }
})
