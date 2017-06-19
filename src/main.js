// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElmentUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from "vue-resource"
import { Button, Select ,Dialog} from 'element-ui'
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElmentUi);
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Dialog.name, Dialog)
require ('./css/common.less');
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
