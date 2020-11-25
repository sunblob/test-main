<template>
  <header class="header">
    <input type="text" placeholder="Поиск по системе" class="header__search" />
    <div class="header__user">
      <img :src="image" alt="" />
      <div class="header__user-info">
        <span class="user__name">Alexander C.</span>
        <br />
        <span class="user__role">Администратор</span>
      </div>
    </div>
  </header>
</template>

<script>
import image from "./../assets/logo.png";
export default {
  data: () => ({
    image: image,
  }),
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  .header__user {
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 50px;
      max-height: 100%;
      border-radius: 50%;
    }

    .header__user-info {
      margin-left: 10px;

      .user__name {
        font-weight: bold;
        color: #000;
        font-size: 14px;
      }

      .user__role {
        font-size: 11px;
      }
    }
  }

  .header__search {
    width: 60%;
    border-radius: 5px;
    border: 1px solid #ccc;
    line-height: 1.5;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #4c39dd;
    }
  }
}
</style>