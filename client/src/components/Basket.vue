<template>
  <div>
    <Navbar />
    <div id="container-data">
      <div class="animate-bottom">
        <h1>Корзина</h1>
        <div v-if="hasCart" id="cards-container" class="row row-cols-1 row-cols-2 row-cols-md-4 row-cols-xl-5 g-4">
          <Card
            v-for="product in cart"
            :key="product.id"
            :product="product"
          />
        </div>
        <h2 class="text-center" v-else>Корзина пуста 😢</h2>
      </div>
    </div>
  </div>
</template>

<script >
import Card from './Catalog/Card'
import Navbar from './Navbar'

import { mapGetters } from "vuex";
export default {
  name: 'Basket',
  components: {
    Card,
    Navbar
  },
  computed: {
    ...mapGetters(["cart"]),
    hasCart() {
      if (Object.keys(this.cart).length !== 0) {
        return true
      }
      return false;
    }
  },
}
</script>

<style >

</style>
