<template>
  <div></div>
</template>

<script>
let WebFontLoader = ''
if (process.browser) {
  WebFontLoader = require('webfontloader')
}

export default {
  created() {
    WebFontLoader.load({
      google: {
        families: [
          'Akaya Telivigala',
          'DotGothic16',
          'RocknRoll One',
          'Stick',
          'Shippori Mincho',
          'Shippori Mincho B1',
          'Akaya Kanadaka',
          'Oi',
          'Newsreader',
          'Ballet',
        ],
      },
    })
  },
  methods: {
    setFontLoaded() {
      this.$emit('font-loaded')
    },
  },
}
</script>
