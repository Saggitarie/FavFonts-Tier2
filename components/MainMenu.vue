<template>
  <div class="mainmenu u-margin-bottom-medium">
    <div>
      <SearchIcon />
      <CustomSearchInput v-model="searchContext" />
    </div>
    <div>
      <SampleTextSelect
        :options="['Custom', 'Sentence', 'Alphabet', 'Paragraph', 'Numerals']"
        :default="'Sentence'"
        class="select"
      />
      <CustomTypeAnythingInput v-model="typeAnythingContext" />
    </div>
    <div>
      <FontSizeSelect
        :options="[
          '8',
          '12',
          '14',
          '20',
          '24',
          '32',
          '40',
          '64',
          '96',
          '120',
          '184',
          '280',
        ]"
        :default="'40'"
        class="select"
      />
      <FontSizeSlider v-model="number" :min="0" :max="300" class="slider" />
    </div>
    <div>
      <ResetIcon />
    </div>
  </div>
</template>

<script>
import SampleTextSelect from './SampleTextSelect'
import FontSizeSelect from './FontSizeSelect'
import FontSizeSlider from './FontSizeSlider'
import CustomSearchInput from './CustomSearchInput'
import CustomTypeAnythingInput from './CustomTypeAnythingInput'
import SearchIcon from '~/assets/images/svg/SearchIcon.svg?inline'
import ResetIcon from '~/assets/images/svg/ResetIcon.svg?inline'

export default {
  components: {
    SampleTextSelect,
    FontSizeSlider,
    FontSizeSelect,
    CustomSearchInput,
    CustomTypeAnythingInput,
    ResetIcon,
    SearchIcon,
  },
  data() {
    return {
      number: '40',
      searchContext: '',
      typeAnythingContext: '',
    }
  },
}
</script>

<style scoped></style>
