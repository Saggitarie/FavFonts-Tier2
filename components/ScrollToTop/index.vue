<template>
  <ScrollTopComponent>
    <a class="btn btn-light">
      <ScrollTopIcon class="btn-icon" />
    </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from './ScrollTop'
import ScrollTopIcon from '~/assets/images/svg/ScrollToTopIcon.svg?inline'
export default {
  components: {
    ScrollTopComponent,
    ScrollTopIcon,
  },
}
</script>

<style>
.btn {
  border-radius: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 37px 20px 20px 20px;
}

.btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.btn-icon {
  height: 30px;
  width: 30px;
  fill: rgba(0, 0, 0, 0.5);
}
</style>
