import axios from 'axios';

const baseUrl = 'http://localhost:3000/categories/';

const state = {
	categories: [],
};

const getters = {
	allCategories: (state) => state.categories,
};

const actions = {
	async fetchCategories({ commit }) {
		const response = await axios.get(baseUrl);
		commit('setCategories', response.data);
	},
	async addCategories({ commit }, category) {
		const response = await axios.post(baseUrl, { category });
		commit('newCategory', response.data);
	},
};

const mutations = {
	setCategories: (state, categories) => {
		state.categories = categories;
	},
	newCategory: (state, category) => {
		state.categories.push(category);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
