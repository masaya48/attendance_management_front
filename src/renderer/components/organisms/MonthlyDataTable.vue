<template>
  <!-- please write html -->
  <section>
    <el-select v-model="value" placeholder="Select" @change="set_monthly_data">
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
  <el-button
        type="primary"
        native-type="submit"
        @click="set_monthly_data"
  >test</el-button>
</section>
</template>

<script>
 import { mapActions, mapState } from 'vuex'
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
   methods: {
     ...mapActions({
       monthly_data: 'monthlydata/getMonthlyData'
     }),
     set_monthly_data () {
       this.monthly_data({
         // 仮
         get_data_month: this.thisMonth
       }).then(() => {
         this.set_date_table()
         // this.tableData[0]['date'] = this.monthlyData['2018-06-24']['start_time']
         // router.push('timecard')
       }).catch((error) => {
         console.log(error)
       })
       // this.tableData[0]['date'] = 'poi'
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
       console.log(dayNum)
       for (var i = 0; i < dayNum; i++) {
         const dayDict = {date: i + 1 + '日',
           attendance_time: '',
           leave_time: '',
           remarks: ''
         }
         this.tableData.push(dayDict)
       }
     }
   }
 }
</script>

<style lang="scss" scoped>

</style>