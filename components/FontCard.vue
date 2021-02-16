<template>
  <section class="fontcard">
    <div class="fontcard__title">
      <div class="fontcard__title--left">
        <p>{{ fontfamilyname }}</p>
      </div>
      <div class="fontcard__title--right">
        <p>{{ styleArr.length }}<span>styles</span></p>
      </div>
    </div>
    <div class="fontcard__text">
      <p :style="{ fontSize: getFontSize + 'px' }">
        {{ getSampleInput }}
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    fontfamilyname: {
      type: String,
      require: true,
      default: '',
    },
    styleArr: {
      type: Array,
      require: true,
      default: () => [], // Create a factory function for default array
    },
  },
  computed: {
    ...mapGetters('fontssize', ['getFontSize']),
    ...mapGetters('fontstypeanything', ['getSampleInput']),
  },
}
</script>

<style lang="scss" scoped>
.fontcard {
  // width: 370.66px;
  height: 349px;

  font-family: 'Roboto Regular';

  border: 1px solid $color-light-grey;
  border-radius: 20px;

  padding: 0.5rem;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 3px 13px rgba($color-black, 0.2);
  }

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

    margin: 16px 24px 16px 16px;

    &--left {
      font-size: 1.4rem;
    }

    &--right {
      color: $color-grey-dark-3;
      & > p {
        font-size: 1rem;

        & > span {
          font-size: 0.9rem;
          margin-left: 0.3rem;
        }
      }
    }
  }

  &__text {
    font-size: 33px;
    padding: 0 16px;
    margin-bottom: 68px;

    & > p {
      word-wrap: break-word;
    }
  }
}
</style>
