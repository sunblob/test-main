<template>
  <div class="content">
    <div v-for="(condition, index) in conditions" :key="condition.id">
      <responders-condition
        :index="index"
        :id="condition.id"
      ></responders-condition>
    </div>
    <responders-footer
      v-on:open-add-condition="openAddCondition"
    ></responders-footer>
  </div>
</template>

<script>
import RespondersCondition from "./RespondersCondition.vue";
import RespondersFooter from "./RespondersFooter.vue";

import { mapGetters } from "vuex";

export default {
  components: { RespondersFooter, RespondersCondition },
  data: () => ({}),
  computed: {
    ...mapGetters(["conditions"]),
  },
  methods: {
    openAddCondition() {
      this.$store.dispatch("addCondition");
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>