<template>
  <div class="fontcardgroup">
    <div v-for="font in getTenFonts" :key="font.family">
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
    ...mapGetters('fontssearch', ['getTenFonts']),
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
</style>
