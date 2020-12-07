<template>
  <section class="calendar-wrap">
    <el-calendar v-model="timeValue" id="calendar">
      <template slot="dateCell" slot-scope="{date, data}">
        <!--自定义内容-->
        <div @click="changeTime(date,data)">
          <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
          <div v-for="(item, index) in calendarData" :key="index">
            <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
              <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                  <div class="is-selected">{{item.content}}</div>
              </div>
              <div v-else></div>
            </div>
            <div v-else></div>
          </div>
        </div>
      </template>
    </el-calendar>
  </section>
</template>

<script>
import moment from 'moment'
export default {
  name: 'HelloWorld',
  data () {
    return {
      timeValue: new Date(),
      calendarData: []
    }
  },
  created(){
    this.$nextTick(() => {

    })
  },
  mounted(){
    this.calendarData.push({
      months: [9,10],//当前月
      days:[1,2,3],//天
      content:'自定义要展示的内容'
    })
    console.log(this.calendarData)
  },
  methods:{
    //处理时间
    handleTime(s) {
      return s < 10 ? '0' + s : s
    },
    //点击天数
   changeTime(date, data) {
      console.log(moment(date).format('YYYY-MM-DD'))
      console.log(data.day)
    }
  }
}
</script>

<style scoped>
.calendar-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.calendar-wrap .el-calendar-table .el-calendar-day{
  height: auto;
}
.calendar-day {
  text-align: center;
  color: #202535;
  line-height: 30px;
  font-size: 12px;
}

.is-selected {
  color: #F8A535;
  font-size: 10px;
  margin-top: 5px;
}

#calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after {
  content: '当月';
}

.content-txt{
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
</style>
