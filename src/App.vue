<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-row"></div>
      <dashboard></dashboard>
      <product-list class="p-3"></product-list>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Dashboard from './components/Admin/AdminDashboard.vue';
import ProductList from './components/Admin/ProductList.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    Dashboard,
    ProductList
  }
}
</script>
,
    ProductList
<style>

</style>