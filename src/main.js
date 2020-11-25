import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//Иконки
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt, faFlag, faUser, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFileAlt, faFlag, faUser, faPhoneAlt, faQuestionCircle, faArrowRight, faPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);
//Нормализация всех базовых стилей
import 'normalize.css';

import axios from './utils/axios';
import titleMixin from './mixins/titleMixin';

Vue.prototype.$axios = axios;

Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
