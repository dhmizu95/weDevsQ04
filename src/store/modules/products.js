import axios from 'axios';

const baseUrl = 'http://localhost:3000/products/';

const state = {
	products: [],
	singleProduct: [],
};

const getters = {
	allProducts: (state) => state.products,
	aProduct: (state) => state.singleProduct,
};

const actions = {
	async fetchProducts({ commit }) {
		const response = await axios.get(baseUrl);
		commit('setProducts', response.data);
	},
	async fetchSingleProduct({ commit }, id) {
		const response = await axios.get(`${baseUrl}/${id}`);
		commit('singleProduct', response.data);
	},
	async addProduct({ commit }, product) {
		const response = await axios.post(baseUrl, product);
		commit('newProduct', response.data);
	},
	async deleteProduct({ commit }, id) {
		await axios.delete(`${baseUrl}/${id}`);
		commit('removeProduct', id);
	},
	async updateProduct({ commit }, updProduct) {
		const response = await axios.put(`${baseUrl}/${updProduct.id}`, updProduct);

		commit('updProduct', response.data);
	},
};

const mutations = {
	setProducts: (state, products) => {
		state.products = products;
	},
	singleProduct: (state, product) => {
		state.singleProduct = product;
	},
	newProduct: (state, product) => {
		state.products.push(product);
	},
	removeProduct: (state, id) => {
		state.products = state.products.filter((product) => product.id !== id);
	},
	updProduct: (state, updProduct) => {
		const index = state.products.findIndex(
			(product) => product.id === updProduct.id
		);
		if (index !== -1) {
			state.products.splice(index, 1, updProduct);
		}
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
