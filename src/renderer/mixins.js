// ヘッダータイトルのmixin
export const headerTitleMixin = {
  created () {
    const { headerTitle } = this.$options
    if (headerTitle) {
      this.$store.commit('changeHeaderTitle', headerTitle)
    }
  }
}
