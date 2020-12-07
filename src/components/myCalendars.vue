<template>
  <el-container>
    <!-- 头部 -->
    <main-header :HeaderTitle="headerTitle"></main-header>
    <section class="calendar-wrap">
      <el-calendar v-model="timeValue" id="calendar">
        <template slot="dateCell" slot-scope="{date, data}">
          <!-- 日程日期 -->
          <div @click="changeTime(date,data)">
            <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
            <div v-for="(item, index) in calendarData" :key="index">
              <div v-if="item === data.day">
                <el-badge is-dot class="item"></el-badge>
              </div>
            </div>
          </div>
        </template>
      </el-calendar>
      <div class="schedule-card">
        <ul>
          <li
            v-for="(item, index) in scheduleList"
            :key="index"
          >
            <h3>{{ item.exchange }}</h3>
            <div class="title">{{ item.title }}</div>
            <p class="content-txt">{{ item.content }}</p>
          </li>
        </ul>
      </div>
    </section>
  </el-container>
</template>

<script>
import moment from 'moment'
import mainHeader from '@/layout/header'

export default {
  name: 'HelloWorld',
  components: {
    mainHeader
  },
  data () {
    return {
      headerTitle: '日历',
      timeValue: new Date(),
      calendarData: ['2020-12-11','2020-12-12'],
      scheduleList: []
    }
  },
  created(){
    this.$nextTick(() => {

    })
  },
  mounted() { },
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

<style>
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

.content-txt{
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
</style>
