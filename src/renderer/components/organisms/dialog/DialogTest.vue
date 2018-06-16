<template>
  <el-dialog
    title="Tips"
    :visible.sync="show"
    width="50%">
    <span>This is a message</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Cancel</el-button>
      <el-button type="primary" @click="close">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'dialog-test',
  computed: {
    ...mapState('dialog', {
      show: state => state.show
    })
  },
  methods: {
    ...mapMutations({
      close: 'dialog/close'
    })
  }
}
</script>