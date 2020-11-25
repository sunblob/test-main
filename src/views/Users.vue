<template>
  <div>
    <div v-if="error">Ошибка при выполнении запроса</div>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: [],
    error: "",
  }),
  async mounted() {
    try {
      const { data: users } = await this.$axios.get("/users");
      this.users = users;
    } catch (error) {
      this.error = error.message;
    }
  },
};
</script>

<style>
</style>