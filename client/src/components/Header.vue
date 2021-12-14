<template>
  <header class="header container">
    <div class="bg-light mb-3 shadow-sm p-2 d-flex justify-content-between align-items-center">
      <div class="col-4 logo">
        <router-link :to="'/'">
          <div class="navbar-brand" href="#">
            <img src="../assets/img/logo.svg" alt="logo">
            <h5 class="d-inline-block mx-3">
              Гордость льва
              <span class="d-block text-muted">Сеть №2 в России</span>
            </h5>
          </div>
        </router-link>
      </div>
      <router-link :to="'/login'">
        <i class="fas fa-door-open"></i>
        Войти
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
}
</script>

<style>
.logo {
  cursor: pointer;
}

.logo h5 {
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: capitalize;
}

header div:first-child {
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>
