<template>
    <v-app>
      <div class="d-flex background-app">
        <side-menu></side-menu>
        <component :is="page"></component>
      </div>
    </v-app>
</template>

<script>
import User from './components/features/User/User';
import Admin from './components/features/Admin/Admin';
import Sales from './components/features/Admin/Sales.vue';
import { eventBus } from './main';
import SideMenu from './components/SideMenu.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    User,
    Admin,
    SideMenu,
    TheHeader,
    Sales
  },
 
  data(){
    return {
      page: eventBus.page
    }
  },
  created(){
    eventBus.$on('update:page', (page) => {
      this.page = page;
    })
  }
}
</script>

<style>
.background-app{
  min-height: 100vh;
  background-color: #95afc0;
}
</style>