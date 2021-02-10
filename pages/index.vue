<template>
  <div class="container">
    <div>
      <NavigationMenu />
      <FontCardGroup />
      <MainMenu />
      <!-- <SearchIcon /> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import NavigationMenu from '../components/NavigationMenu'
import FontCardGroup from '../components/FontCardGroup'
import MainMenu from '../components/MainMenu'
// import SearchIcon from '~/assets/images/svg/SearchIcon.svg?inline'

export default {
  components: {
    NavigationMenu,
    FontCardGroup,
    MainMenu,
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
