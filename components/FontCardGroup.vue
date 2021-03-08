<template>
  <div :class="getIsGridStatus ? 'fontcardgroup' : 'fontcardgroup--column'">
    <div v-for="font in getMatchFonts" :key="font.family">
      <FontCard :fontfamilyname="font.family" :style-arr="font.variants" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FontCard from './FontCard'
export default {
  components: {
    FontCard,
  },
  computed: {
    ...mapGetters('fontssearch', ['getHundredFonts', 'getMatchFonts']),
    ...mapGetters('fontscustom', ['getIsGridStatus']),
  },
}
</script>

<style lang="scss" scoped>
.fontcardgroup {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  grid-gap: 1.5rem;

  padding: 0 5rem;
}

.fontcardgroup--column {
  display: grid;
  grid-template-columns: 1fr;

  grid-row-gap: 1.5rem;

  width: 100vw;

  padding: 0 5rem;
}
</style>
