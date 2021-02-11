<template>
  <div>
    <SortBySelect
      :options="['Trending', 'Most Popular', 'Newest', 'Name']"
      :default="'Trending'"
      class="select"
    />
  </div>
</template>

<script>
import SortBySelect from './SortBySelect'
export default {
  components: {
    SortBySelect,
  },
}
</script>

<style scoped></style>
