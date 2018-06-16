<template>
  <transition name="fade">
    <component v-if="show" :is="dialogName"></component>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import DialogTest from './DialogTest'

export default {
  name: 'dialog-outlet',
  components: {
    DialogTest
  },
  computed: {
    ...mapState('dialog', {
      dialogName: state => state.dialogName,
      show: state => state.show
    })
  }
}
</script>