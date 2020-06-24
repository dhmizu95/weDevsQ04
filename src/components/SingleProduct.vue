<template>
  <div class="product">
    <h3>Product details</h3>
    <div>
      <p>Product Name: {{aProduct.name}}</p>
      <p v-for="category in aProduct.category" :key="category">Product Category: {{category}}</p>
      <p>Product Price: {{aProduct.price}}</p>
      <button class="btn btn-success">Buy Now</button>
      <span class="distance"></span>
      <router-link :to="'/'" class="btn btn-primary">Back</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductPage",
  computed: {
    ...mapGetters(["aProduct"])
  },
  methods: {
    ...mapActions(["fetchSingleProduct"])
  },
  created() {
    this.fetchSingleProduct(this.$route.params.id);
  }
};
</script>

<style>
</style>

