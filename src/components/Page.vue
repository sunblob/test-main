<template>
  <div class="page">
    <the-header></the-header>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 20px;
  width: 100%;
}
</style>