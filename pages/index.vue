<template>
  <div class="container">
    <div>
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
// import SearchIcon from '~/assets/images/svg/SearchIcon.svg?inline'

export default {
  components: {
    NavigationMenu,
    FontCardGroup,
    MainMenu,
    SortMenu,
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
