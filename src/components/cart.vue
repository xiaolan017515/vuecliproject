<template>
  <div class="hello">
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="icon-add" viewBox="0 0 32 32">
                    <title>add2</title>
                    <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
                </symbol>
                <symbol id="icon-ok" viewBox="0 0 39 32">
                    <title>ok</title>
                    <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
                </symbol>
                <symbol id="icon-edit" viewBox="0 0 32 32">
                    <title>edit</title>
                    <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
                </symbol>
                <symbol id="icon-del" viewBox="0 0 26 32">
                    <title>delete</title>
                    <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
                </symbol>
                <symbol id="icon-clock" viewBox="0 0 32 32">
                    <title>clock</title>
                    <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
                </symbol>
            </defs>
        </svg>
    <h2>Essential Links</h2>
     <my-component message="hello!"></my-component>
      <router-link to="/cart/login">登录</router-link>
            <router-link to="/cart/reg">注册</router-link>
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
     <ul class="cart-item-head">
      <li class="f_list">
        <div class="f_item f_tab1">商品信息</div>
        <div class="f_item f_tab2">商品金额</div>
        <div class="f_item f_tab3">商品数量</div>
        <div class="f_item f_tab3">总金额</div>
        <div class="f_item f_tab3">编辑</div>
      </li>
    </ul>
    <ul class="food_box">
      <li class="f_list" v-for="listitem in list">
        <div class="f_item f_tab1"><img v-bind:src="listitem.productImage"   v-bind:alt="listitem.productName"></div>
        <div class="f_item f_tab2" v-text="listitem.productPrice"></div>
        <div class="f_item f_tab3" v-text="listitem.productQuentity"></div>
        <div class="f_item f_tab3">{{listitem.productPrice*listitem.productQuentity|formatMoney}}</div>
        <div class="f_item f_tab3">
          <a href="javascript:;" class="item-edit-btn">
              <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
          </a></div>
      </li>
    </ul>
  </div>
</template>
<script>
require ('../css/cart.less')
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[
      {
        "productId":"600100002115",
        "productName":"黄鹤楼香烟",
        "productPrice":19,
        "productQuentity":1,
        "productImage":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493962592191&di=d39055dab93571449fe4d9a9ec458f67&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D14879988%2C137903037%26fm%3D214%26gp%3D0.jpg",
        "parts":[
          {
            "partsId":"10001",
            "partsName":"打火机"
          }
        ]
      },
      {
        "productId":"600100002120",
        "productName":"加多宝",
        "productPrice":8,
        "productQuentity":5,
        "productImage":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493962589640&di=e349b1dc3d5b98bbfa7aa057d73b17f3&imgtype=0&src=http%3A%2F%2Fimg.wjw.cn%2Fmbr1203%2Fmbr120315200724593443%2FPicNatural%2FIMG120318154105531265.jpg",
        "parts":[
          {
            "partsId":"20001",
            "partsName":"吸管"
          }
        ]
      }
    ]
    }
  },
  mounted: function () {
		var _this = this;
	},
  filters: {
		formatMoney: function (value,quentity) {
			if(!quentity)quentity=1;
			return "¥ "+(value*quentity).toFixed(2) +"元";
		}
	},
  methods:{
    
  }
}
</script>


