<template>
  <div class="home">
    <InsertProduct />
    <br />
    <Products />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
import InsertProduct from "../components/InsertProduct.vue";

export default {
  name: "Home",
  components: { InsertProduct, Products }
};
</script>
