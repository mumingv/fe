import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Layout1 from './Layout1.vue'
import Icon1 from './Icon1.vue'
import Radio1 from './Radio1.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  //render: h => h(App)
  //render: h => h(Layout1)
  //render: h => h(Icon1)
  render: h => h(Radio1)
})
