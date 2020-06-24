import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SingleProduct from '../components/SingleProduct.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/product/:id',
		name: 'SingleProduct',
		component: SingleProduct,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
