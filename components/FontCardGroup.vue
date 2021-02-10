<template>
  <div class="fontcardgroup">
    <FontCard />
    <FontCard />
    <FontCard />
  </div>
</template>

<script>
import FontCard from './FontCard'
export default {
  components: {
    FontCard,
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
