<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}px
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option
          open = false
          $emit('input', option)
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
}
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;

  font-family: 'ProductSans Regular';
  font-size: 1.2rem;
}

.custom-select .selected {
  background-color: $color-white;
  border-radius: 6px;
  color: $color-grey-dark-3;
  padding-left: 1.2rem;
  cursor: pointer;
  user-select: none;

  transition: all 0.3s;

  &:after {
    position: absolute;
    content: '';
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: $color-navigation-active transparent transparent transparent;
  }

  &:hover {
    background-color: rgba($color-navigation-hover, 0.1);
  }
}

.custom-select .selected.open {
  border-radius: 6px 6px 0px 0px;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  box-shadow: 0px 3px 13px rgba($color-black, 0.2);
  position: absolute;
  background-color: $color-white;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: $color-grey-dark-3;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: rgba($color-light-grey, 0.3);
}

.selectHide {
  display: none;
}
</style>
