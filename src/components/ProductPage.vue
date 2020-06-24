<template>
  <div>
    <h3>Product details</h3>
    <div class="card">
      <div class="card-header">header</div>
      <div class="card-body">
        <p>Product Name: {{aProduct.name}}</p>
        <p>Product Category: {{aProduct.category}}</p>
        <p>Product Price: ${{aProduct.price}}</p>
        <button class="btn btn-success">Buy Now</button>
        <router-link :to="'/'" class="btn btn-primary">Back</router-link>
      </div>
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
