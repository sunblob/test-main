<template>
  <div id="app">
    <side-nav></side-nav>
    <base-page></base-page>
  </div>
</template>

<script>
import BasePage from "./components/BasePage.vue";
import SideNav from "./components/SideNav.vue";

export default {
  components: {
    SideNav,
    BasePage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
}

html,
body {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
