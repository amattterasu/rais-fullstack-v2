<template>
  <div class="form-wrapper fadeInDown">
    <div v-if="!loading" id="formContent">
      <h1 class="mt-3">Регистрация</h1>
      <form @submit.prevent="register">
        <input required type="email" v-model="email" placeholder="Логин">
        <input required type="password" v-model="password" placeholder="Пароль">
        <div v-if="errors" class="form-invalid">{{errors}}</div>
        <button type="submit">Регистрация</button>
      </form>
      <div id="formFooter">
        <router-link class="underlineHover text-secondary" :to="'/login'">Войти</router-link>
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
    register: function () {
      const data = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch(err => this.errors = "Пользователь с email уже зарегистрирован!")
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
