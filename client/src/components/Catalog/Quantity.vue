<template>
  <div class="quantity btn-default">
    <button @click="addToItems(product);" :class="{ hidden: getCount > 0 }" class="btn btn-danger btn-default w-100 quantity__order">Заказать</button>
    <div class="quantity__counter" :class="{ hidden: getCount === 0 }">
      <button @click="removeItem(product.id);" class="btn btn-danger btn-default quantity__minus">-</button>
      <input name="quantity" type="text" class="quantity__input" :value="getCount">
      <button @click="addToItems(product);" class="btn btn-danger btn-default quantity__plus">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  nave: 'v-quantity',
    props: {
    product: {
      type: Object
    },
  },
  computed: {
    ...mapGetters(["cart"]),
    getCount() {
      return (this.product && this.cart[this.product.id]) ? this.cart[this.product.id].qt : 0
    },
  },
  methods: {
    ...mapActions(["addToItems", "removeItem"]),
  }

}
</script>

<style>
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  padding: 0;
  font-size: 1.2em;
}

.quantity__minus,
.quantity__plus {
  color: #fff;
  border: 0;
  width: 40px;
  box-shadow: none;
  float: left;
  text-align: center;
  font-weight: 600;
}

.quantity__input {
  width: 40px;

  border: 0;
  border-radius: 8px;
  color: #000;
  text-align: center;
  box-shadow: none;
  outline: 0;
  float: left;
  margin-top: 2px;
}

.quantity__minus:link,
.quantity__plus:link {
  color: #8184a1;
}

.quantity__minus:visited,
.quantity__plus:visited {
  color: #fff;
}

.btn-default {
  display: block;
  border-radius: 8px;
  background: var(--order-btn);
  letter-spacing: .8px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
}

.hidden {
  display: none;
}
</style>
