<template>
  <div>
    <Navbar />
    <div id="container-data">
      <div class="animate-bottom">
        <div v-if="products.length">
          <h1>Рекомендуем!</h1>
          <div id="cards-container" class="row row-cols-1 row-cols-2 row-cols-md-4 row-cols-xl-5 g-4">
            <Card
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
        <h2  class="text-center" v-else-if="!loading">Товаров нет 😢</h2>
      </div>
    </div>
  </div>
</template>

<script >
import Card from './Card'
import Navbar from '../Navbar'
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'v-catalog',
  components: {
    Card,
    Navbar
  },
  async mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters(["products", "loading"])
  },

  methods: {
    ...mapActions(['getProducts']),
  },

}
</script>

<style>
</style>
