<template>
  <div class="container">
    <div>
      <NavigationMenu />
      <FontCardGroup />
      <!-- <SearchIcon /> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavigationMenu from '../components/NavigationMenu'
import FontCardGroup from '../components/FontCardGroup'
// import SearchIcon from '~/assets/images/svg/SearchIcon.svg?inline'

export default {
  components: {
    NavigationMenu,
    FontCardGroup,
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
