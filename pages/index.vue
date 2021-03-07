<template>
  <div class="container">
    <div>
      <client-only>
        <font-loader />
        <ScrollTopArrow></ScrollTopArrow>
      </client-only>

      <NavigationMenu />
      <MainMenu />
      <SortMenu />
      <FontCardGroup />
      <!-- <SearchIcon /> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavigationMenu from '../components/NavigationMenu'
import FontCardGroup from '../components/FontCardGroup'
import MainMenu from '../components/MainMenu'
import SortMenu from '../components/SortMenu'
import ScrollTopArrow from '../components/ScrollToTop'
// import FontLoader from '../components/FontLoader'
// import SearchIcon from '~/assets/images/svg/SearchIcon.svg?inline'

export default {
  components: {
    NavigationMenu,
    FontCardGroup,
    MainMenu,
    SortMenu,
    ScrollTopArrow,
    // FontLoader,
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
    ...mapActions('fontsapi', {
      fetchAllFonts: 'fetchTrendingFonts',
    }),
  },
}
</script>

<style scoped lang="scss">
.test {
  color: $color-primary-2;
}
</style>
