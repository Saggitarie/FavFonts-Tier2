<template>
  <div class="search">
    <input
      type="text"
      placeholder="Type Something"
      :value="value"
      class="search__input"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  &__input {
    font-size: 1.25rem;
    font-family: 'Roboto Regular';

    border: none;

    width: 20rem;

    &:focus {
      outline: none;

      &::placeholder {
        color: $color-navigation-active;
      }
    }
  }
}
</style>
