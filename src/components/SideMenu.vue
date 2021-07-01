<template>
  <v-card
    class="sideMenuContainer"
    height="500px"
    width="256"
  >
    <v-navigation-drawer
    class="sideMenu"
    >
      <v-list>
        <v-list-item link @click="changePage('User')">
          PokemonShop
          <img src="../assets/pika.png" width="30" height="30" />
        <button class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        </v-list-item>
        <v-list-item link @click="changePage('Admin')" :class="{active: page === 'Admin'}" class="nav-link">
          Dashboard
        </v-list-item>
        <v-list-item link @click="changePage('Sales')" class="nav-link">
          Sales
        </v-list-item>
        <v-list-item link @click="changePage('Bid')" class="nav-link">
          Bid
        </v-list-item>
        <v-list-item link @click="changePage('Orders')" class="nav-link">
          Orders
        </v-list-item>
        <v-list-item link @click="changePage('Stock')" class="nav-link">
          Stock
        </v-list-item>
        <v-list-item link @click="changePage('Analytics')" class="nav-link">
          Analytics
        </v-list-item>
        <v-list-item link @click="changePage('Users')" class="nav-link">
          Users
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
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

<style lang="scss" scoped>
.sideMenuContainer{
  position: sticky;
  top: 10vh;
  left: 50px;
  border-radius: 10px;
}
.sideMenu{
  background-color: #ffd32a !important;
}
</style>