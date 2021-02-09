<template>
  <div class="container">
    <div>
      <h1 class="test">test</h1>
      <SearchIcon />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SearchIcon from '~/assets/images/svg/SearchIcon.svg?inline'

export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.$nextTick(function () {
      this.fetchAllFonts()
    })
  },
  methods: {
    ...mapActions('fonts', {
      fetchAllFonts: 'fetchAllFonts',
    }),
  },
}
</script>

<style scoped lang="scss">
.test {
  color: $color-primary-2;
}
</style>
