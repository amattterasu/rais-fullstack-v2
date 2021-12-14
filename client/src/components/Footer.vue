<template>
  <footer class="footer text-center text-white mt-3 bg-footer-top">
    <div class="container p-4 pb-0">
      <section class="mb-4 text-center">
        <a
          v-for="media in socialMedia"
          :key="media.name"
          class="btn btn-outline-light btn-floating m-1"
          role="button"
          v-bind:href="media.href"
        >
          <i class="fab" v-bind:class="'fa-' + media.name"></i>
        </a>
      </section>
    </div>
    <div class="text-center p-3 bg-footer-bottom">
      <span class="text-uppercase">Гордость льва</span>
     <span>© 2021 Copyright</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "v-footer",
  data() {
    return {
      socialMedia: [
        { name: 'facebook-f', href: 'https://facebook.com' },
        { name: 'twitter', href: 'https://twitter.com' },
        { name: 'google', href: 'https://google.com' },
        { name: 'instagram', href: 'https://instagram.com' },
        { name: 'github', href: 'https://github.com' },
    ]
    }
  }
}
</script>

<style>

</style>
