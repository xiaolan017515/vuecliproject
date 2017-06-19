 <template id="celender">
      <div class='celendebox'>
        <nav class="calende_t">
            <div class="calender_nav">
               <span class="nav_left"><img src="../img/back.png" alt=""></span>
               <span class="nav_center">{{currDate.year}} 年 {{currDate.mon+1}} 月 {{currDate.day}} 日</span>
               <span class="nav_right"><img src="../img/more.png" alt=""></span>
            </div>
            <ul class="celender_li">
                <li  v-for="weeksitem in weeks"><div>{{weeksitem}}</div></li>
            </ul>
            <ul class="celender_item">
                <li v-for="currlistitem in currlist"><div :class="{'curractive':true}">{{currlistitem}}</div></li>
            </ul>
        </nav>
      </div>
</template>
<script>
require ('../css/celender.less');
  export default{
    props:['message'],
    data () {
      return {
          //当前时间列表
          currlist:[],
              /**
           * [currDate 当前日期对象]
           * @type {Object}
           */
          currDate: {
              year: new Date().getFullYear(),
              mon: new Date().getMonth(),
              day: new Date().getDate(),
              week: new Date().getDay(),
              monDetails: {
                  firstDay: 1,
                  lastDay: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
                  weekDayFirst: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay(),
                  weekDaylast:new Date(new Date().getFullYear(), new Date().getMonth(), new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()).getDay()
              }
          },
            /**
            * [selectedDateObj 选中的日期对象]
            * @type {Object}
            */
           selectedDateObj: {
              year: new Date().getFullYear(),
              mon: new Date().getMonth(),
              day: new Date().getDate(),
              week: new Date().getDay(),
              active:true
          },
          weeks: ['日', '一', '二', '三', '四', '五', '六'],
          weeksmath: [7,1,2,3,4,5,6],
          months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      }
    },
    mounted(){
       this.init();
    },
    watch: {
    
    },
    methods:{
        init(){
            console.log(this.currDate);
            this.currlist=[];
            this.addfirstdata();
            for(var i=1;i<this.currDate.monDetails.lastDay;i++){
                this.currlist.push(i);
            }
            this.addlastdata();
        },
        /*
        *填充开始空数据
        */
        addfirstdata(){
            console.log(this.currDate.monDetails.weekDayFirst);
            for(var i in this.weeksmath){
              if(this.weeksmath[i] == this.currDate.monDetails.weekDayFirst){
                  for(var j=0;j<i;j++){
                      this.currlist.push('');
                  }
              }
            }
        },
        addlastdata(){
            console.log(this.currDate.monDetails.weekDaylast);
            for(var i in this.weeksmath){
              if(this.weeksmath[i] == this.currDate.monDetails.weekDaylast){
                  for(var j=0;j<7-i;j++){
                      this.currlist.push('');
                  }
              }
            }
        }
        
    }
  }
</script>
