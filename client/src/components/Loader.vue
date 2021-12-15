<template>
  <div v-if="loading" id="loader" class="lds-ripple">
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loading"])
  },
}
</script>

<style>
.lds-ripple {
  width: 160px;
  height: 160px;
  position: absolute;
  left: 45%;
  top: 35%;
  z-index: 999;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid var(--dodo-orange);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 72px;
    left: 72px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 144px;
    height: 144px;
    opacity: 0;
  }
}
</style>
