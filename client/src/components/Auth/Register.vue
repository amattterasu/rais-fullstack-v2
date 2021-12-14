<template>
  <div class="form-wrapper fadeInDown">
    <div id="formContent">
      <h1 class="mt-3">Регистрация</h1>
      <form>
        <input type="text" id="login" name="login" placeholder="Логин">
        <input type="password" id="password" name="login" placeholder="Пароль">
        <button type="submit">Регистрация</button>
      </form>
      <div id="formFooter">
        <router-link class="underlineHover text-secondary" :to="'/login'">Войти</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import 'Auth.css';
</style>
