<template>
	<div class="d-flex flex-row">
		<shop class="shop"></shop>
		<cart class="cart"></cart>
	</div>
</template>

<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

export default {
	components: {
		Shop,
		Cart
	}
}
</script>

<style>
.shop{
  width: 80%;
}
.cart{
  width: 20%;
}
</style>