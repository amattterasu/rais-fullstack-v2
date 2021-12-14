<template>
  <nav class="navbar navbar-expand bg-light sticky-top flex-wrap p-2 mb-3 text-center justify-content-between shadow-sm">
    <ul class="navbar-nav flex-3">
      <li class="nav-item active" v-for="category in categories" :key="category.name">
        <a class="nav-link">{{category.name}}</a>
      </li>
    </ul>
   <div class="basket-nav">
    <div class="basket-nav" v-if="TotalPositions || Total">
      <h6 class="basket-count">Всего товаров: <b>{{TotalPositions}}</b></h6>
      <h6 class="basket-price ms-4">Стоимость: <b>{{Total}} ₽</b></h6>
    </div>
     <router-link
      class="btn btn-default btn-primary align-self-end ms-4 order-button"
      :to="'/order'">
      Сделать заказ
    </router-link>
    <router-link
      class="btn btn-primary align-self-end ms-4"
      :to="'/basket'">
      Корзина
    </router-link>
   </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'v-navbar',
  data() {
    return {
      categories: [
        { name: 'Роллы', href: '#'},
        { name: 'Ассорти', href: '#' },
        { name: 'Бургеры', href: '#' },
        { name: 'Пицца', href: '#' },
        { name: 'Горячее и салаты', href: '#' },
      ]
    }
  },
    computed: {
      ...mapGetters(["cart", "Total", "TotalPositions"]),
  },

}
</script>

<style>
.basket-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-button {
  border-radius: 2rem !important;
}

</style>

