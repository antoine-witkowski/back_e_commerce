<template>
 <form class="d-flex flex-column formContainer">
   <h4>Add new card</h4>
   <hr class="w-100">
   <div class="form-group">
     <label>Image Url:</label>
     <input v-model="form.img" type="text" class="form-control">
   </div>
   <div class="form-group">
     <label>Name:</label>
     <input v-model="form.nom" type="text" class="form-control">
   </div>
   <div class="form-group">
     <label>Reference:</label>
     <input v-model="form.ref" type="text" class="form-control">
   </div>
   <div class="form-group">
     <label>Type:</label>
     <input v-model="form.type" type="text" class="form-control">
   </div>
   <div class="form-group">
     <label>Level:</label>
     <input v-model.number="form.niveau" type="number" class="form-control">
   </div>
   <div class="form-group">
     <label>Price:</label>
     <input v-model.number="form.prix" type="number" class="form-control">
   </div>
   <h3 class="mt-3">Devise</h3>
   <hr class="w-100">
   <div class="form-group d-flex justify-content-center">
    <div class="form-check form-check-inline">
      <input v-model="form.devise" class="form-check-input" type="radio" name="devise" id="dollars" value="$">
      <label class="form-check-label" for="dollars">$</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="form.devise" class="form-check-input" type="radio" name="devise" id="euros" value="€">
      <label class="form-check-label" for="euros">€</label>
    </div>
   </div>
   <ul v-if="errors.length">
     <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
   </ul>
  <v-btn @click="trySubmit" large color="yellow" elevation="4">Ajouter</v-btn>
 </form>
</template>

<script>
import { eventBus } from '../../../main';

export default {
  data(){
    return {
      form: {
        img: '',
        nom: '',
        ref: '',
        type: '',
        niveau: '',
        prix: '',
        devise: '',
        achat: true,
        enchere: false
      },
      errors: []
    }
  },
  methods: {
    trySubmit(e){
      e.preventDefault();
      if(this.formIsValid()){
        console.log(this.form);
        eventBus.addProduct({...this.form});
        this.resetForm();
        eventBus.changePage('User');
      }
    },
    resetForm(){
      this.form = {
        img: '',
        nom: '',
        ref: '',
        type: '',
        niveau: '',
        prix: '',
        devise: '',
        achat: true,
        enchere: false
      }
    },
    formIsValid(){
      this.errors = [];
      if(!this.form.img){
        this.errors.push('Image required !');
      }
      if(!this.form.nom){
        this.errors.push('Name required !');
      }
      if(!this.form.ref){
        this.errors.push('Reference required !');
      }
      if(!this.form.type){
        this.errors.push('Type required !');
      }
      if(!this.form.niveau){
        this.errors.push('Level required !');
      }
      if(!this.form.prix){
        this.errors.push('Price required !');
      }
      if(!this.form.devise){
        this.errors.push('Devise required !');
      }
      return this.errors.length ? false : true;
    }
  }
}
</script>

<style scoped>
  h4{
    font-size: 2rem;
  }
  h3{
    font-size: 1.5rem;
  }
  .formContainer{
    padding: 50px 30px;
    background-color: #1e90ff;
    border-radius: 10px;
    color: white;
  }
</style>