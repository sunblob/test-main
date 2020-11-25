<template>
  <div>
    <header class="polls__header">
      <ul class="polls__list">
        <li v-for="tab in tabs" :key="tab.name" class="polls__item">
          <button @click="selectComponent(tab.component)" class="polls__button">
            {{ tab.name }}
          </button>
        </li>
      </ul>
    </header>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Responders from "@/components/responders/Responders";
import Questions from "@/components/questions/Questions";
import Logic from "@/components/logic/Logic";
import Conditions from "@/components/conditions/Conditions";
import Params from "@/components/params/Params";

export default {
  components: {
    Responders,
    Questions,
    Logic,
    Params,
    Conditions,
  },
  title: "Опросы",
  data: () => ({
    selectedComponent: "responders",
    tabs: [
      {
        name: "Параметры",
        component: "params",
      },
      {
        name: "Вопросы",
        component: "questions",
      },
      {
        name: "Логика",
        component: "logic",
      },
      {
        name: "Условия",
        component: "conditions",
      },
      {
        name: "Респонденты",
        component: "responders",
      },
    ],
  }),

  methods: {
    selectComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style lang="scss" scoped>
.polls__header {
  margin-bottom: 20px;
}

.polls__list {
  display: flex;
}

.polls__button {
  display: inline-block;
  font-weight: 400;
  color: rgb(13, 184, 141);
  background-color: transparent;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  font-size: 0.85rem;
  border-radius: 0.25rem;
  line-height: 1.5;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid rgb(13, 184, 141);
  }

  &:focus {
    outline: none;
    border-bottom: 3px solid rgb(13, 184, 141);
  }
}
</style>