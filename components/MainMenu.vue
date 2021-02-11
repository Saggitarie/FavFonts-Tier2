<template>
  <div>
    <SampleTextSelect
      :options="['Custom', 'Sentence', 'Alphabet', 'Paragraph', 'Numerals']"
      :default="'Sentence'"
      class="select"
    />
    <FontSizeSelect />
    <FontSizeSlider v-model="number" :min="0" :max="300" class="slider" />
  </div>
</template>

<script>
import SampleTextSelect from './SampleTextSelect'
import FontSizeSelect from './FontSizeSelect'
import FontSizeSlider from './FontSizeSlider'
export default {
  components: {
    SampleTextSelect,
    FontSizeSlider,
    FontSizeSelect,
  },
}
</script>

<style scoped></style>
