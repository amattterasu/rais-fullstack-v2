<template>
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="../../assets/img/logo.svg" alt="Image">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <span class="card-text ">
          {{product.description}}
        </span>
      </div>
      <div class="card-footer">
        <p class="card-text text-muted">
          {{product.weight}} грамм
        </p>
        <div class="d-flex justify-content-between align-items-center flex-wrap">
          <div class="card-text">
            <h6 class="mb-0">от {{product.price}}₽</h6>
          </div>
          <quantity
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quantity from './Quantity.vue'
export default {
  components: { Quantity },
  nave: 'v-card',
  props: {
    product: {
      type: Object
    },
  },
}
</script>

<style>

</style>
