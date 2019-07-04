<template>
  <div>
    <app-stock 
      v-for="(stock, index) in stocks" 
      :key="index"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import appStock from './Stock'

export default {
  components: {
    appStock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
}
</script>