/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
  list: [],
  isAuth: false,
};

const getters = {
  evenOrOdd: state => (state.count % 2 === 0 ? 'even' : 'odd'),
};
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  add(state, result) {
    state.list.push(result);
  },
};
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  add: ({ commit }) => commit('add'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 1000);
    });
  },
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
