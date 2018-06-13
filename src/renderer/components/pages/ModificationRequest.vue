<template>
  <el-tabs type="card">
    <el-tab-pane label="依頼作成">
      <modification-request-new></modification-request-new>
    </el-tab-pane>
    <el-tab-pane label="依頼一覧">依頼一覧</el-tab-pane>
    <el-tab-pane label="投稿依頼">投稿依頼</el-tab-pane>
  </el-tabs>
</template>

<script>
// import { mapActions, mapMutations, mapState } from 'vuex'
import ModificationRequestNew from '../organisms/ModificationRequestNew'

export default {
  name: 'modification-request',
  headerTitle: '修正依頼',
  data () {
    return {
    }
  },
  components: {
    ModificationRequestNew
  }
}
</script>

<style lang="scss" scoped>

</style>