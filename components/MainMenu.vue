<template>
  <div>
    <SampleTextSelect
      :options="['Custom', 'Sentence', 'Alphabet', 'Paragraph', 'Numerals']"
      :default="'Sentence'"
      class="select"
    />
    <FontSizeSelect />
    <FontSizeSlider />
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
