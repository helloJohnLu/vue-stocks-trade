<template>
  <div class="">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import appHeader from './components/Header'

export default {
  components: {
    appHeader
  },
  created () {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
  body {
    padding: 1.875rem;
  }
</style>
