 <template id="reg">
      <div @click="login" :class="{'red1':check,'red2':check}">注册界面 {{message}}</div>
</template>
<style lang="less">
  .red1{
    background: red;
  }
  .red2{
    color: burlywood
  }
</style>
<script>
  export default{
    props:['message'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        a: 1,
        b: 2,
        c: 3,
        check:true  
      }
    },
    watch: {
      a: function (val, oldVal) {
        console.log(12);
      },
      // 方法名
      b: 'someMethod',
      // 深度 watcher
      c: {
        handler: function (val, oldVal) { /* ... */ },
        deep: true
      }
    },
    methods:{
      login(){
        this.a++
        console.log(22)
      }
    }
  }
</script>
