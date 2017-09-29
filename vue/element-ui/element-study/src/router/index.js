import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Button from '@/components/Button'
import ButtonRadio from '@/components/ButtonRadio'
import ButtonCheckbox from '@/components/ButtonCheckbox'
import Form from '@/components/Form'
import FormInput from '@/components/FormInput'
import FormInputNumber from '@/components/FormInputNumber'
import FormSelect from '@/components/FormSelect'


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
      path: '/form',
      component: Form,
      children: [
        {
          path: 'radio',
          component: ButtonRadio
        },
        {
          path: 'checkbox',
          component: ButtonCheckbox
        },
        {
          path: 'input',
          component: FormInput
        },
        {
          path: 'inputnumber',
          component: FormInputNumber
        },
        {
          path: 'select',
          component: FormSelect
        }
      ]
    }
  ]
})
