import Vue from 'vue';
import VueRouter from 'vue-router';
import Polls from '../views/Polls.vue';
import BlackList from '../views/BlackList.vue';
import Users from '../views/Users.vue';
import CallCenter from '../views/CallCenter.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Polls',
		component: Polls,
	},
	{
		path: '/users',
		name: 'Users',
		component: Users,
	},
	{
		path: '/black-list',
		name: 'BlackList',
		component: BlackList,
	},
	{
		path: '/call',
		name: 'CallCenter',
		component: CallCenter,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
