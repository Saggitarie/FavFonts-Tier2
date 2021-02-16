<template>
  <div class="mainmenu u-margin-bottom-big">
    <div class="mainmenu__search">
      <div class="mainmenu__search__icon">
        <SearchIcon />
      </div>
      <div class="mainmenu__search__input">
        <CustomSearchInput v-model="searchContext" />
      </div>
    </div>
    <div class="mainmenu__border"></div>
    <div class="mainmenu__type">
      <div class="mainmenu__type__select">
        <SampleTextSelect
          :key="trigger"
          v-model="selectedOption"
          :options="['Custom', 'Sentence', 'Alphabet', 'Paragraph', 'Numerals']"
          class="select"
        />
      </div>
      <div class="mainmenu__type__input">
        <CustomTypeAnythingInput v-model="typeAnythingContext" />
      </div>
    </div>
    <div class="mainmenu__border"></div>
    <div class="mainmenu__font">
      <div class="mainmenu__font__select">
        <FontSizeSelect
          v-model="number"
          :options="[8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280]"
          class="select"
        />
      </div>
      <div class="mainmenu__font__slider">
        <FontSizeSlider v-model="number" :min="8" :max="300" class="slider" />
      </div>
    </div>
    <div class="mainmenu__border"></div>
    <div class="mainmenu__reset">
      <div class="mainmenu__reset__icon">
        <ResetIcon class="mainmenu__reset__iconitself" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
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
      number: 40,
      searchContext: '',
      typeAnythingContext: '',
      selectedOption: 'Custom',
      trigger: false,
    }
  },
  computed: {
    ...mapGetters('fontssize', ['getFontSize']),
  },
  watch: {
    number(val) {
      this.setFontSize(val.toString())
    },
    searchContext(val) {
      this.setSearchInput(val.toString())
    },
    typeAnythingContext(val) {
      this.setSampleTextOption('Custom')
      this.trigger = !this.trigger
      this.setTypeInput(val.toString())
    },
    selectedOption(val) {
      this.setSampleTextOption(val.toString())
      this.setAppropriateSample(val.toString())
    },
  },
  methods: {
    ...mapMutations('fontssize', ['setFontSize']),
    ...mapMutations('fontssearch', ['setSearchInput']),
    ...mapMutations('fontstypeanything', [
      'setTypeInput',
      'setSampleTextOption',
    ]),
    ...mapActions('fontstypeanything', ['setAppropriateSample']),
  },
}
</script>

<style lang="scss" scoped>
.mainmenu {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin: 0 5rem 3rem 5rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;

  border: 1px solid rgba($color-grey-dark-2, 0.7);

  &__border {
    content: '';
    border-right: 1px solid rgba($color-grey-dark-2, 0.7);

    flex: 0.01;
  }

  &__search {
    display: flex;
    flex-direction: row;
    align-items: center;

    flex: 0.8;

    &__input {
      margin-left: 2px;
    }
  }

  &__type {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    width: 550px;

    flex: 1;

    &__select {
      flex: 1;
    }

    &__input {
      flex: 2;
    }
  }

  &__font {
    display: flex;
    flex-direction: row;

    align-items: center;

    padding: 0 0.3rem;

    &__select {
      flex: 1;
    }

    &__slider {
      flex: 2;
    }

    flex: 1;
  }

  &__reset {
    display: flex;
    flex-direction: row;

    align-self: center;
    justify-self: center;

    justify-content: center;
    flex: 0.2;

    cursor: pointer;

    &__iconitself {
      color: $color-grey-dark;
    }
  }
}
</style>
