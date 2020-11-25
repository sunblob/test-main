<template>
  <div class="side">
    <div class="nav__logo"></div>
    <nav class="nav__menu">
      <ul class="nav__list">
        <router-link
          class="nav__item"
          v-for="link in links"
          :key="link.name"
          tag="li"
          :to="{ name: link.name }"
        >
          <font-awesome-icon :icon="link.icon" size="3x"></font-awesome-icon>
          <span>{{ link.text }}</span>
        </router-link>
      </ul>
    </nav>
    <div class="nav__help">
      <font-awesome-icon
        :icon="['far', 'question-circle']"
        size="3x"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "Polls", text: "Опросы", icon: ["far", "file-alt"] },
      { name: "Users", text: "Пользователи", icon: ["far", "user"] },
      { name: "BlackList", text: "Черные списки", icon: ["far", "flag"] },
      { name: "CallCenter", text: "Колл-центр", icon: ["fas", "phone-alt"] },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.side {
  box-shadow: 2px 1px 1px 0px #ccc;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 150px;
  background-color: rgb(248, 248, 248);
  height: 900px;

  .nav__logo {
    width: 50px;
    height: 50px;
    background-color: #ff0000;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 20px;
  }

  .nav__menu {
    margin-top: 40px;
  }
}

.nav__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  transition: all 0.5s;
  border-radius: 5px;
  margin: 5px 0;
  border: 3px solid transparent;

  &.router-link-exact-active {
    color: rgb(13, 184, 141);
    border: 3px solid rgb(13, 184, 141);
  }

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
}

.nav__help {
  margin-top: auto;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>