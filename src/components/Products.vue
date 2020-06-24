<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in allProducts" :key="product.id">
          <template v-if="editId === product.id">
            <td>
              <input v-model="editProductData.product_name" type="text" />
            </td>
            <td>
              <select
                class="form-control"
                v-model="editProductData.product_category"
                type="text"
                id="productCategory"
                required
              >
                <option v-for="category in allCategories" :key="category.id">{{ category.category }}</option>
              </select>
            </td>
            <td>
              <input v-model="editProductData.product_price" type="text" />
            </td>
            <td>
              <span class="icon">
                <i @click="onEditSubmit(editProductData)" class="fa fa-check"></i>
              </span>
              <span class="icon">
                <i @click="onCancel" class="fa fa-ban"></i>
              </span>
            </td>
          </template>
          <template v-else>
            <td>{{ product.name }}</td>
            <td>
              <span v-for="category in product.category" :key="category">
                {{ category }}
                <span v-if="product.category.length > 1">,</span>
              </span>
            </td>
            <td>{{ product.price }}</td>
            <td>
              <a href="#" class="icon">
                <i v-on:click="deleteProduct(product.id)" class="fa fa-trash"></i>
              </a>
              <a href="#" class="icon">
                <i v-on:click="onEdit(product)" class="fa fa-pencil"></i>
              </a>
              <router-link :to="{name:'SingleProduct', params:{id: product.id}}" class="icon">
                <i class="fa fa-eye"></i>
              </router-link>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  computed: {
    ...mapGetters(["allProducts", "aProduct", "allCategories"])
  },
  methods: {
    ...mapActions([
      "fetchProducts",
      "deleteProduct",
      "updateProduct",
      "fetchCategories"
    ]),
    onEdit(product) {
      this.editId = product.id;
      this.editProductData.id = product.id;
      this.editProductData.product_name = product.name;
      this.editProductData.product_category = this.fetchCategories();
      this.editProductData.product_price = product.price;
    },
    onEditSubmit(editProductData) {
      const updProduct = {
        id: editProductData.id,
        name: editProductData.product_name,
        category: [editProductData.product_category],
        price: editProductData.product_price
      };

      this.editId = "";
      this.editProductData.id = "";
      this.editProductData.product_name = "";
      this.editProductData.product_category = [];
      this.editProductData.product_price = "";

      this.updateProduct(updProduct);
    },
    onCancel() {
      this.editId = "";
      this.editProductData.id = "";
      this.editProductData.product_name = "";
      this.editProductData.product_category = [];
      this.editProductData.product_price = "";
    }
  },
  created() {
    this.fetchProducts();
  },
  data() {
    return {
      editId: "",
      editProductData: {
        id: "",
        product_category: [],
        product_name: "",
        product_price: ""
      }
    };
  }
};
</script>

<style>
.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}
</style>
