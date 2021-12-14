<template>
  <div class="form-wrapper fadeInDown">
    <div id="formContent">
      <h1 class="mt-3">Вход на сайт</h1>
      <form @submit.prevent="login">
        <input required  v-model="email" type="text"  name="login" placeholder="Логин">
        <input required v-model="password" type="password"  name="login" placeholder="Пароль">
        <button type="submit"> Войти</button>
      </form>
      <div id="formFooter">
        <router-link class="underlineHover text-secondary" :to="'/register'">Регистрация</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email : "",
      password : ""
    }
  },
  methods: {
    login: function () {
      let email = this.email;
      let password = this.password;
      console.log(email, password);
    //   this.$store.dispatch('login', { email, password })
    //  .then(() => this.$router.push('/'))
    //  .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  @import 'Auth.css';
</style>
