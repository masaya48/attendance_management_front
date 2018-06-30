<template>
  <div class="clock">
    <p class="clock__date">{{ date }}</p>
    <p class="clock__time">{{ time }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'timer',
  computed: {
    ...mapGetters({
      date: 'getDisplayDate',
      time: 'getDisplayTime'
    })
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}
.clock {
  text-align: center;
  display: flex;
  flex-direction: column;
  &__time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
  }
  &__date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
}

</style>
