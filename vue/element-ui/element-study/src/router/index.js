import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Button from '@/components/Button'
import ButtonRadio from '@/components/ButtonRadio'
import ButtonCheckbox from '@/components/ButtonCheckbox'


Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/test',
    	name: 'Test',
    	component: Test
    },
    {
    	path: '/button',
    	name: 'Button',
    	component: Button,
    	children: [
    		{
    			path: 'radio',
    			name: 'ButtonRadio',
    			component: ButtonRadio
    		},
    		{
    			path: 'checkbox',
    			name: 'ButtonCheckbox',
    			component: ButtonCheckbox
    		}
    	]
    }
  ]
})
