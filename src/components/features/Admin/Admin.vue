<template>
  <div class="dashboardWrapper">
    <div class="dashboardContainer">
      <v-container>
        <v-row>
          <v-col md="8" align-self="center">
            <v-container>
              <v-row>
                <v-col md="6" class="">
                  <sales-mini/>
                </v-col>
                <v-col md="6" class="">
                  <bid-mini/>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="6" class="">
                  <orders-mini/>
                </v-col>
                <v-col md="6" class="">
                  <stock-mini/>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="6" class="">
                  <analytics-mini/>
                </v-col>
                <v-col md="6" class="">
                  <users-mini/>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col md="4">
            <admin-product-form></admin-product-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

      <!-- 
       -->
    
</template>

<script>
import AdminProductForm from './AdminProductForm';
import AnalyticsMini from './Analytics/AnalyticsMini.vue';
import UsersMini from './Users/UsersMini.vue';
import StockMini from './Stock/StockMini.vue';
import BidMini from './Bid/BidMini.vue';
import OrdersMini from './Orders/OrdersMini.vue';
import SalesMini from './Sales/SalesMini.vue';

export default {
  components: { 
    AdminProductForm,
    SalesMini,
    BidMini,
    OrdersMini,
    AnalyticsMini,
    UsersMini,
    StockMini
    }
}
</script>

<style lang="scss">
.dashboardWrapper{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
  background-color: #95afc0;
}
.dashboardContainer{
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 80%;
  height: 80vh;
  padding: 2vh 20px;
  margin: 10vh 20px 0 0;
  background-color: #ffd32a;
  border-radius: 10px;
}
.analytics{
  height:100%
}
.red{
  background-color: red;
  border: solid black 2px !important;

}
.yellow2{
  background-color: yellow;
  border: solid black 2px !important;
  height:100%;

}
.green{
  background-color: green;
  border: solid black 2px !important;

}
.pink{
  background-color: pink;
  border: solid black 2px !important;

}
</style>