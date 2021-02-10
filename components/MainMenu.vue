<template>
  <div>
    <SampleTextSelect
      :options="['go', 'python', 'rust', 'javascript']"
      :default="'go'"
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
