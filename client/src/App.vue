<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <Loader />
      <main class="container main">
        <router-view />
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer,
    Loader
  },
}
</script>

<style>
@import 'assets/index.css';
#app {
  height: 100%;
}
</style>
