<template>
  <section>
    <label>aaaaa</label>
    <el-button @click="testOpen('dialog-test')"></el-button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'modification-request-new',
  methods: {
    ...mapMutations({
      testOpen: 'dialog/show'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

