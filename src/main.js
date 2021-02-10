import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: '1',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/DP7/DP7_FR_101.png",
        nom: "Salamèche",
        ref: "SCPM01",
        type: "Feu",
        niveau: 2,
        prix: "20",
        devise: "€",
        achat: true,
        enchere: false, 
      },
      {
        id: '2',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/DP6/DP6_FR_11.png",
        nom: "Mewtwo",
        ref: "BRJ151",
        type: "Psy",
        niveau: 2,
        prix: "199",
        devise: "€",
        achat: true,
        enchere: false, 
      },
      {
        id: '3',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/DP3/DP3_FR_77.png",
        nom: "Bulbizarre",
        ref: "SCPM07",
        type: "Plante",
        niveau: 2,
        prix: "20",
        devise: "€",
        achat: true,
        enchere: false, 
      },
      {
        id: '4',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/BW10/BW10_FR_14.png",
        nom: "Carapuce",
        ref: "SCPM04",
        type: "Eau",
        niveau: 2,
        prix: "20",
        devise: "€",
        achat: true,
        enchere: false, 
      },
      {
        id: '5',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/BW10/BW10_FR_14.png",
        nom: "Carapuce",
        ref: "SCPM04",
        type: "Eau",
        niveau: 2,
        prix: "20",
        devise: "€",
        achat: true,
        enchere: false, 
      },
      {
        id: '6',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/DP7/DP7_FR_101.png",
        nom: "Salamèche",
        ref: "SCPM01",
        type: "Feu",
        niveau: 2,
        prix: "20",
        devise: "€",
        achat: true,
        enchere: false, 
      },
      {
        id: '7',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/DP6/DP6_FR_11.png",
        nom: "Mewtwo",
        ref: "BRJ151",
        type: "Psy",
        niveau: 2,
        prix: "199",
        devise: "€",
        achat: true,
        enchere: false, 
      },
      {
        id: '8',
        img: "https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/web/DP3/DP3_FR_77.png",
        nom: "Bulbizarre",
        ref: "SCPM07",
        type: "Plante",
        niveau: 2,
        prix: "20",
        devise: "€",
        achat: true,
        enchere: false, 
      }
    ],
    cart: [],
    page: 'Admin'
  },
  methods: {
    addProductToCart(product){
      if(!this.cart.map( i => i.id).includes(product.id)){
        this.cart = [...this.cart, product];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    removeItemFromCart(item){
      this.cart = this.cart.slice().filter( i => i.id !== item.id);
      this.$emit('update:cart', this.cart.slice());
    },
    changePage(page){
      this.page = page;
      this.$emit('update:page', this.page)
    },
    addProduct(product){
      this.products = [...this.products, {...product, id: this.products.length + 1 + ''}];
      this.$emit('update:products', this.products);
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
