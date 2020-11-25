import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		conditions: [],
	},
	mutations: {
		addCondition(state) {
			state.conditions.push({ value: 'A', id: Date.now() });
		},
		deleteCondition(state, payload) {
			state.conditions = state.conditions.filter((item) => item.id !== payload);
		},
	},
	actions: {
		addCondition(context) {
			context.commit('addCondition');
		},
		deleteCondition(context, index) {
			context.commit('deleteCondition', index);
		},
	},
	getters: {
		conditions: (state) => state.conditions,
	},
});
