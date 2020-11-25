<template>
  <div>
    <div class="condition__card-add">
      <div class="card-add__text" @click="openAddCondition">
        <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
        <span>Нажмите, чтобы добавить новое условие выборки.</span>
        <span> Все условия всязываеются между собой логическим "И"</span>
      </div>
      <div class="card-add__buttons">
        <button class="button button--left">Протестировать опрос</button>
        <button class="button button--right">
          Далее
          <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openAddCondition() {
      this.$emit("open-add-condition");
    },
  },
};
</script>

<style lang="scss" scoped>
.condition__card-add {
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  .card-add__text {
    color: green;
    box-shadow: 0 0 2px #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 40px 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .card-add__buttons {
    display: flex;
    justify-content: space-between;
    background-color: #ccc;
    padding: 20px;

    .button {
      padding: 10px;
      border-radius: 5px;
      transition: all 0.5s;
    }

    .button--left {
      color: green;
      background-color: #fff;

      &:hover,
      &:focus {
        background-color: rgb(240, 240, 240);
      }
    }

    .button--right {
      background-color: rgb(2, 173, 2);
      color: #fff;

      &:hover,
      &:focus {
        background-color: rgb(0, 138, 0);
      }
    }
  }
}
</style>