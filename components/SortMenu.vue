<template>
  <div class="sortmenu u-margin-bottom-medium">
    <div class="sortmenu--left">
      <p>1030 of 1030 families</p>
    </div>
    <div class="sortmenu--right">
      <div class="sortmenu--right__select">
        <SortBySelect
          v-model="sortByOption"
          :options="['Trending', 'Most Popular', 'Newest', 'Name']"
          class="select"
        />
      </div>
      <div class="sortmenu--right__icon">
        <div class="sortmenu--right__icon__grid">
          <GridIcon />
        </div>
        <div class="sortmenu--right__icon__border"></div>
        <div class="sortmenu--right__icon__column">
          <ColumnIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SortBySelect from './SortBySelect'

import ColumnIcon from '~/assets/images/svg/ColumnIcon.svg?inline'
import GridIcon from '~/assets/images/svg/GridIcon.svg?inline'
export default {
  components: {
    SortBySelect,
    ColumnIcon,
    GridIcon,
  },
  data() {
    return {
      sortByOption: 'Trending',
    }
  },
  watch: {
    sortByOption(option) {
      if (option === 'Trending') {
        this.fetchTrendingFonts()
      } else if (option === 'Most Popular') {
        this.fetchPopularFonts()
      } else if (option === 'Newest') {
        this.fetchRecentFonts()
      } else {
        this.fetchInAscendingOrderFonts()
      }
    },
  },
  methods: {
    ...mapActions('fontsapi', {
      fetchTrendingFonts: 'fetchTrendingFonts',
    }),
    ...mapActions('fontsapi', {
      fetchPopularFonts: 'fetchPopularFonts',
    }),
    ...mapActions('fontsapi', {
      fetchRecentFonts: 'fetchRecentFonts',
    }),
    ...mapActions('fontsapi', {
      fetchInAscendingOrderFonts: 'fetchInAscendingOrderFonts',
    }),
  },
}
</script>

<style lang="scss" scoped>
.sortmenu {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 0 5rem;

  &--left {
    flex: 1;

    & > p {
      font-family: 'Roboto Regular';
      font-size: 1.1rem;
    }
  }

  &--right {
    display: flex;
    flex-direction: row;

    justify-content: flex-end;
    align-items: center;

    flex: 1;

    &__select {
      margin-right: 1rem;
    }

    &__icon {
      display: flex;
      flex-direction: row;

      border: 1px solid rgba($color-grey-dark-2, 0.7);
      border-radius: 10px;
      padding: 0.5rem;

      &__grid {
        flex: 1;
        cursor: pointer;
      }

      &__border {
        content: '';
        flex: 1;
        border-right: 1px solid rgba($color-grey-dark-2, 0.7);

        padding-right: 0.8rem;
        margin-right: 0.8rem;
      }

      &__column {
        flex: 1;
        cursor: pointer;
      }
    }
  }
}
</style>
