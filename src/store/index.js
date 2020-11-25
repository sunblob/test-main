import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		conditions: [],
	},
	mutations: {
		addCondition(state, payload) {
			state.conditions.push(payload);
		},
		deleteCondition(state, payload) {
			state.conditions.splice(payload, 1);
		},
	},
	actions: {
		addCondition(context, condition) {
			context.commit('addCondition', condition);
		},
		deleteCondition(context, index) {
			context.commit('deleteCondition', index);
		},
	},
	getters: {
		conditions: (state) => state.conditions,
	},
});
