// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'

Vue.config.productionTip = false


// let router = new VRouter({
// 	routes: [
// 		{
// 			path: '/apple',
// 			component: Apple,
// 			children: [
// 				{
// 					path: 'red',
// 					component: RedApple
// 				}
// 			]
// 		},
// 		{
// 			path: '/banana',
// 			component: Banana
// 		}
// 	]
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Layout/>',
  components: { Layout }
})
