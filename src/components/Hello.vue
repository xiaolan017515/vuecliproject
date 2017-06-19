<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="bg_img"><img v-bind:src="img" alt=""></div>

      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2 @click="kk" class="aa">Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
     <router-link v-bind:to="{path:'/home',query: {id:1}}">Go to Home</router-link>
     <router-link to="/about">Go to About</router-link>
     <router-link to="/cart">Go to cart</router-link>
     <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
     <el-pagination
    layout="prev, pager, next"
    :page-size="10"
    @size-change="handleSizeChange"
    @current-change="clickch"
    :current-page="currentPage"
    :total="tatal">
  </el-pagination>
  </div>
</template>
<script>
require ('../css/a.less');
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      img:'http://img05.tooopen.com/images/20150531/tooopen_sy_127457023651.jpg',
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1: '',
        value2: '',
        dialogVisible: false,
        tatal:120,
        currentPage:1
      };
  },
  methods:{
     kk(){
        debugger
      console.log(this.$http)
      this.$http.jsonp('https://www.google-analytics.com/analytics.js').then(response => {
         console.log(response);
          // get body data
          this.someData = response.body;
        }, response => {
          // error callback
        });
     },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            console.log(_)
            console.log(11)
            done();
          })
          .catch(_ => {
            console.log(_)
          });
      },
      clickch(){
        console.log(this.currentPage)
      },
      handleSizeChange(){

      }
      // size-change(){
      //   console.log(11)
      // },
      // current-change(){
      //   console.log(11)
      // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
