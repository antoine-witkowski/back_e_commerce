<template>
  <div class="product-container d-flex flex-column">
    <div class="d-flex justify-content-between">
      <span>Type: {{ product.type }}</span>
      <span>Ref: {{ product.ref }}</span>
    </div>
    <hr class="w-100 mb-2">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 350px;" :src="product.img" :alt="product.nom">
    </div>
    <hr class="w-100">
    <div class="d-flex justify-content-between">
      <h4>{{ product.nom }}</h4>
      <span>Level: {{ product.niveau }}</span>
    </div>
    <hr class="w-100">
    <div>
      <span>Price: {{ product.prix }} {{ product.devise }}</span>
      <button @click="addProductToCart" class="btn btn-primary btn-sm float-right">Get !</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main';

  export default {
    props: ['product'],
    methods: {
      addProductToCart(){
        eventBus.addProductToCart({...this.product})
      }
    }
  }
</script>

<style>
.product-container{
  height: 550px;
  margin: 10px;
  padding: 5px;
  border: solid 4px #999;
  border-radius: 10px;
}

</style>