<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
let WebFontLoader = ''
if (process.browser) {
  WebFontLoader = require('webfontloader')
}

export default {
  computed: {
    fontsList() {
      return this.$store.getters['fontssearch/getHundredFonts']
    },
    // ...mapGetters('fontssearch', ['getTenFonts']),
  },
  watch: {
    fontsList(valArr, old) {
      const fontsArr = valArr.map((font) => font.family)

      if (fontsArr.length !== 0) {
        WebFontLoader.load({
          google: {
            families: fontsArr,
          },
        })
      }
    },
  },
  methods: {
    setFontLoaded() {
      this.$emit('font-loaded')
    },
    ...mapActions('fontsapi', {
      fetchAllFonts: 'fetchTrendingFonts',
    }),
  },
}
</script>
