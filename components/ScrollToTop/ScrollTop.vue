<template>
  <a v-show="visible" class="bottom-right" @click="scrollTop">
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 0)
    },
    scrollListener(e) {
      this.visible = window.scrollY > 150
    },
  },
}
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 60px;
  right: 50px;
  cursor: pointer;
}
</style>
