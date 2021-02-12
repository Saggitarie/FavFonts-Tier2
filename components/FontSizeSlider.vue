<template>
  <div>
    <div class="slider-component">
      <div class="slidecontainer">
        <input
          ref="input"
          v-model="listenFontSize"
          type="range"
          :min="min"
          :max="max"
          class="slider"
          @input="onInput"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  props: {
    value: {
      type: Number,
      required: true,
      // default: 40,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentValue: this.$props.value,
    }
  },
  computed: {
    // eslint-disable-next-line object-shorthand
    listenFontSize: {
      get() {
        return this.value
      },
      set(fontSize) {
        this.currentValue = fontSize
      },
    },
  },
  methods: {
    onInput() {
      // this.currentValue is a string because HTML is weird
      this.$emit('input', parseInt(this.currentValue))
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-component .slidecontainer {
  width: 100%;
}

.slider-component .slidecontainer .slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: $color-navigation-hover;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: $color-navigation-active;
    cursor: pointer;
    border-radius: 50%;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: $color-navigation-active;
    cursor: pointer;
    border-radius: 50%;
  }
}
</style>
