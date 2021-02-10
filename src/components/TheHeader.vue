<template>
  <nav class="navbar navbar-light bg-light navbar-expand-lg">
    <a @click="changePage('User')" class="navbar-brand" href="#">
      <img src="../assets/pika.png" width="30" height="30" />
      PokemonShop
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a @click="changePage('User')" :class="{active: page === 'User'}" class="nav-link " href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a @click="changePage('Admin')" :class="{active: page === 'Admin'}" class="nav-link " href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a @click="changePage()" class="nav-link" href="#">Edition</a>
        </li>
        <li class="nav-item">
          <a @click="changePage()" class="nav-link" href="#">Bid</a>
        </li>
        <li class="nav-item">
          <a @click="changePage()" class="nav-link" href="#">Orders</a>
        </li>
        <li class="nav-item">
          <a @click="changePage()" class="nav-link" href="#">Stock</a>
        </li>
        <li class="nav-item">
          <a @click="changePage()" class="nav-link" href="#">Rules</a>
        </li>
        <li class="nav-item">
          <a @click="changePage()" class="nav-link" href="#">Utilisateurs</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {eventBus} from '../main';

export default {
  data() {
    return {
      page: eventBus.page
    }
  },
  methods: {
    changePage(page){
      eventBus.changePage(page);
    },
    created(){
      eventBus.$on('update:page', (page) => {
        this.page = page;
      })
    }
  }
}
</script>

<style scoped>
a{
  cursor: pointer;
}

</style>