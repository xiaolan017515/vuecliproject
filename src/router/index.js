import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import cart from '../components/cart'
import Login from '../components/login'
import Reg from '../components/reg'
const Home = Vue.extend({
  template: '<div><h1>Home</h1><p>{{msg}}</p></div>',
  data: function () {
    return {
      msg: 'Hello, vue router!'
    }
  }
});
const About = Vue.extend({
  template: '<div><h1>About</h1><my-celender></my-celender></div>'
});
const star = 0;
// 注册全局组件
Vue.component('my-component', require('../components/reg'));
Vue.component('my-celender', require('../celender/celender'));
Vue.use(Router)
const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '/home', name: 'home', component: Home },
  { path: '/about', component: About },
  {
    path: '/cart', component: cart, children: [
      { path: '/cart/login', component: Login },
      { path: '/cart/reg', component: Reg }
    ]
  }
]
export default new Router({
  routes
})

