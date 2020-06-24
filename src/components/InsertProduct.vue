<template>
  <div>
    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Add New Product</b-button>

    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        <span class="text-center">Insert Product</span>
      </template>
      <div class="d-block">
        <form class="form" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label for="productName">Name:</label>
            <input
              v-model="productData.name"
              type="text"
              class="form-control"
              id="productName"
              required
            />
          </div>
          <div class="form-group">
            <label for="productCategory">Category:</label>
            <div class="row">
              <div class="col">
                <select
                  class="form-control"
                  v-model="productData.category"
                  type="text"
                  id="productCategory"
                  required
                >
                  <option
                    v-for="category in allCategories"
                    :key="category.id"
                  >{{ category.category }}</option>
                </select>
              </div>
              <div class="col">
                <InsertCategory />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="productPrice">Price:</label>
            <input
              v-model="productData.price"
              type="text"
              class="form-control"
              id="productPrice"
              required
            />
          </div>

          <div class="ml-auto text-right">
            <b-button variant="danger" @click="$bvModal.hide('bv-modal-example')">Close</b-button>
            <span class="distance"></span>
            <button
              type="submit"
              class="btn btn-success"
              @click="$bvModal.hide('bv-modal-example')"
            >Save</button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InsertCategory from "./InsertCategory.vue";
export default {
  name: "InsertProduct",
  components: { InsertCategory },
  computed: {
    ...mapGetters(["allCategories"])
  },
  methods: {
    ...mapActions(["fetchCategories", "addProduct"]),
    onSubmit() {
      const product = {
        name: this.productData.name,
        category: [this.productData.category],
        price: this.productData.price
      };
      this.addProduct(product);
    }
  },
  created() {
    this.fetchCategories();
  },
  data() {
    return {
      editId: "",
      productData: {
        id: "",
        name: "",
        category: [],
        price: ""
      },
      editProductData: {
        id: "",
        product_id: "",
        product_name: "",
        product_price: ""
      },
      products: []
    };
  }
};
</script>

<style>
</style>
