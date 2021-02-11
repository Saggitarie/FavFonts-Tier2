<template>
  <div class="navigation u-margin-bottom-medium">
    <div class="navigation--left">
      <div class="navigation--left__img-container">
        <img
          class="navigation--left__img"
          src="~/assets/images/png/googlelogo_dark_color_74x24dp.png"
        />
      </div>
      <div class="navigation--left__fonts">
        <span>Fonts</span>
      </div>
    </div>
    <div class="navigation--right">
      <div class="navigation--right--1">
        <p>Browse fonts</p>
      </div>
      <div class="navigation--right--2">
        <p>Featured</p>
      </div>
      <div class="navigation--right--3">
        <p>Articles</p>
      </div>
      <div class="navigation--right--4">
        <p>About</p>
      </div>
      <div class="navigation--right--5">
        <SettingDarkIcon />
      </div>
      <div class="navigation--right--6">
        <ViewSelectedIcon />
      </div>
    </div>
  </div>
</template>

<script>
import SettingDarkIcon from '~/assets/images/svg/SettingDarkIcon.svg?inline'
import ViewSelectedIcon from '~/assets/images/svg/ViewSelectedFontFamilyIcon.svg?inline'
export default {
  components: {
    ViewSelectedIcon,
    SettingDarkIcon,
  },
}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid $color-light-grey;

  height: 85px;

  &--left {
    font-family: 'ProductSans Regular';

    display: flex;
    flex-direction: row;
    align-items: center;

    flex: 1.1;

    // Padding For Navigation
    padding-left: 80px;
    padding-top: 0.5rem;

    &__img {
      width: 99px;
      opacity: 0.6;
    }

    &__img-container {
      padding-top: 0.3rem;
    }

    &__fonts {
      padding-bottom: 0.3rem;
    }

    &:nth-child(1) {
      font-size: 1.75rem;
      color: $color-navigation-font;

      padding-bottom: 0.5rem;
    }
  }

  &--right {
    font-family: 'OpenSans Bold';
    color: $color-navigation-font;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    flex: 1.8;

    font-size: 1.2rem;

    &--1 {
      height: 100%;
      width: 160px;
      display: flex;

      cursor: pointer;

      color: $color-navigation-active;

      border-bottom: 2px solid $color-navigation-active;

      &:hover {
        color: $color-navigation-dark-font;
        background-color: rgba($color-navigation-hover, 0.05);
      }

      & > p {
        margin: auto;
      }
    }

    &--2 {
      height: 100%;
      width: 160px;
      display: flex;

      cursor: pointer;

      & > p {
        margin: auto;
      }

      &:hover {
        color: $color-grey-dark-3;
        background-color: rgba($color-navigation-hover, 0.05);
      }
    }

    &--3 {
      height: 100%;
      width: 160px;
      display: flex;

      cursor: pointer;

      & > p {
        margin: auto;
      }

      &:hover {
        color: $color-grey-dark-3;
        background-color: rgba($color-navigation-hover, 0.05);
      }
    }

    &--4 {
      height: 100%;
      width: 160px;
      display: flex;

      cursor: pointer;

      & > p {
        margin: auto;
      }

      &:hover {
        color: $color-grey-dark-3;
        background-color: rgba($color-navigation-hover, 0.05);
      }
    }
  }

  &--5 {
    height: 100%;
    width: 160px;
    display: flex;

    cursor: pointer;

    & > svg {
      margin: auto;
    }

    &:hover {
      color: $color-grey-dark-3;
      background-color: rgba($color-navigation-hover, 0.05);
    }
  }

  &--6 {
    height: 100%;
    width: 160px;
    display: flex;

    cursor: pointer;

    & > svg {
      margin: auto;
    }

    &:hover {
      color: $color-grey-dark-3;
      background-color: rgba($color-navigation-hover, 0.05);
    }
  }
}
</style>
