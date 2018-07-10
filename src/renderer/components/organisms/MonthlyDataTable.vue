<template>
  <!-- please write html -->
  <section>
    <el-select v-model="value" placeholder="Select" @change="chanege_selectbox">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
<el-table
    :data="tableData"
    stripe
    style="width: 100%">
  <el-table-column
    prop="date"
    label="日付"
    width="180">
  </el-table-column>
  <el-table-column
    prop="attendance_time"
    label="始業時間"
    width="180">
  </el-table-column>
    <el-table-column
      prop="leave_time"
      label="終業時間"
      width="180">
    </el-table-column>
    <el-table-column
    prop="remarks"
    label="備考">
  </el-table-column>
  </el-table>
</section>
</template>

<script>
 import { mapActions, mapState } from 'vuex'
 import { getDisplayTime, getDisplayMonth } from '@/services/time'
 // import { constants } from 'http2';

// import { mapActions } from 'vuex'
// const date1 = '1'
export default {
   data () {
     // const date1 = '1'
     return {
       thisMonth: new Date(),
       tableData: [],
       options: [{
         value: 'Option1',
         label: 'Option1'
       }, {
         value: 'Option2',
         label: 'Option2'
       }, {
         value: 'Option3',
         label: 'Option3'
       }, {
         value: 'Option4',
         label: 'Option4'
       }, {
         value: 'Option5',
         label: 'Option5'
       }],
       value: ''
     }
   },
   name: 'monthly_data',
   computed: {
     ...mapState('monthlydata', {
       monthlyData: state => state.monthlyData
     })
   },
   created () {
     this.set_monthly_data()
     this.value = getDisplayMonth(this.thisMonth)
     this.set_selectbox()
   },
   methods: {
     ...mapActions({
       monthly_data: 'monthlydata/getMonthlyData'
     }),
     set_monthly_data () {
       this.monthly_data({
         // 仮
         get_data_month: this.thisMonth
       }).then(() => {
         this.tableData = []
         this.set_date_table()
       }).catch((error) => {
         console.log(error)
       })
     },
     // 月の日数の取得
     day_num (date) {
       const month = date.getMonth() + 1
       const year = date.getYear()
       const moreDay = [1, 3, 5, 7, 8, 10, 12]
       if (moreDay.indexOf(month) >= 0) {
         return 31
       } else {
         if (month === 2) {
           if (year % 4 === 0) {
             return 29
           }
           return 28
         }
         return 30
       }
     },
     // 月の日数に合わせたテーブル行の表示
     set_date_table () {
       const dayNum = this.day_num(this.thisMonth)
       for (let i = 0; i < dayNum; i++) {
         const oneDate = new Date(this.thisMonth.getFullYear(), this.thisMonth.getMonth(), i + 1)
         let attendanceTime = ''
         let leaveTime = ''
         let remarks = ''
         for (let k = 0; k < this.monthlyData.length; k++) {
           if (this.check_date(oneDate, new Date(this.monthlyData[k]['working_date']))) {
             attendanceTime = new Date(this.monthlyData[k]['start_time'])
             leaveTime = new Date(this.monthlyData[k]['end_time'])
             remarks = this.monthlyData[k]['remarks']
           }
         }
         if (attendanceTime !== '') {
           attendanceTime = new Date(attendanceTime)
           attendanceTime = getDisplayTime(attendanceTime)
         }
         if (leaveTime !== '') {
           leaveTime = new Date(leaveTime)
           leaveTime = getDisplayTime(leaveTime)
         }
         // const worked_date =
         const dayDict = {date: i + 1 + '日',
           attendance_time: attendanceTime,
           leave_time: leaveTime,
           remarks: remarks
         }
         this.tableData.push(dayDict)
       }
     },
     // 日付のみの判定
     check_date (oneDate, workedDate) {
       const oneDateYear = oneDate.getFullYear()
       const oneDateMonth = oneDate.getMonth() + 1
       const oneDateDay = oneDate.getDate()
       const workedDateYear = workedDate.getFullYear()
       const workedDateMonth = workedDate.getMonth() + 1
       const workedDateDay = workedDate.getDate()
       // 日付が一致しているならtrue
       if (oneDateYear === workedDateYear && oneDateMonth === workedDateMonth && oneDateDay === workedDateDay) {
         return true
       } else {
         return false
       }
     },
     // セレクトボックスの値のセット
     set_selectbox () {
       for (var i = 4; i >= 0; i--) {
         const setDate = new Date(this.thisMonth.getFullYear(), this.thisMonth.getMonth() + 1 - i, 1)
         this.options[i]['value'] = setDate + ''
         this.options[i]['label'] = getDisplayMonth(setDate) + ''
       }
     },
     // セレクトボックスの内容が変えられたら
     chanege_selectbox () {
       this.thisMonth = new Date(this.value)
       this.set_selectbox()
     }
   }
 }
</script>

<style lang="scss" scoped>

</style>