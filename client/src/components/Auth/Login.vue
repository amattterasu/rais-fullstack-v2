<template>
  <div class="form-wrapper fadeInDown">
    <div v-if="!loading" id="formContent">
      <h1 class="mt-3">Вход на сайт</h1>
      <form @submit.prevent="login">
        <input required  v-model="email" type="email"  placeholder="Логин">
        <input required v-model="password" type="password"  placeholder="Пароль">
        <div v-if="errors" class="form-invalid">{{errors}}</div>
        <button type="submit">Войти</button>
      </form>
      <div id="formFooter">
        <router-link class="underlineHover text-secondary" :to="'/register'">Регистрация</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data(){
    return {
      email : "",
      password : "",
      errors: ''
    }
  },
  methods: {
    login: function () {
      this.errors = ''
      const data = {
        email: this.email,
        password: this.password,

      }
      this.$store.dispatch('login', data)
        .then(() => this.$router.push('/'))
        .catch((err) => {
          this.errors ='Неверный логин или пароль'
        })
    }
  },
  computed: {
    ...mapGetters(["loading"])
  },
}
</script>

<style scoped>
  @import 'Auth.css';
</style>
