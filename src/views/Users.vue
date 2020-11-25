<template>
  <div class="users">
    <div v-if="loading">Загрузка данных...</div>
    <div v-else>
      <div v-if="error">Ошибка при выполнении запроса</div>
      <div v-for="user in users" :key="user.id" class="user__card">
        <div class="user__name">Name: {{ user.name }}</div>
        <div>Username: {{ user.username }}</div>
        <div>email:{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "Пользователи",
  data: () => ({
    users: [],
    error: "",
    loading: true,
  }),
  async mounted() {
    try {
      const { data: users } = await this.$axios.get("/users");
      this.users = users;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.users {
  display: flex;
  flex-direction: column;

  .user__card {
    background-color: #ccc;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .user__name {
      font-weight: bold;
    }
  }
}
</style>