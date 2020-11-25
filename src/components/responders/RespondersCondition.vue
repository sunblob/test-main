<template>
  <div class="condition">
    <div class="condition__select">
      <span>Условие</span>
      <select v-model="selected">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          :disabled="option.disabled"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="buttons">
      <button class="button" @click="deleteCondition">Удалить условие</button>
    </div>
    <div class="condition__concat" v-if="!isLast">И</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["index", "id"],
  data: () => ({
    selected: "А",
    options: [
      { text: "Выберите условие", value: "", disabled: true },
      { text: "Один", value: "А", disabled: false },
      { text: "Два", value: "Б", disabled: false },
      { text: "Три", value: "В", disabled: false },
    ],
  }),
  computed: {
    ...mapGetters(["conditions"]),
    isLast() {
      return this.conditions.length - 1 === this.index;
    },
  },
  methods: {
    deleteCondition() {
      this.$store.dispatch("deleteCondition", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.condition {
  padding: 20px;
  background-color: #ccc;
  border-bottom: 1px solid black;

  .condition__concat {
    position: relative;
    border: 2px solid white;
    display: inline-block;
    padding: 5px 20px;
    border-radius: 5px;
    top: 35px;
    background: white;
  }

  .condition__select {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    span {
      font-weight: bold;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;

    .button {
      padding: 10px;
      border-radius: 5px;
      transition: all 0.5s;

      color: red;
      border: 1px solid red;
      background-color: white;
    }
  }
}
</style>