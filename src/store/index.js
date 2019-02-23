/**
 * @file store
 */

import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * create a new store instance
 */
export default function createStore() {
    return new Vuex.Store({
        state: {
            tips: ''
        },
        actions: {
            async getTips({ commit }) {
                let res = await axios.get('https://www.duqianduan.com/api/gettips');
                if (res.data) {
                    commit('setTips', res.data);
                }
            }
        },
        mutations: {
            setTips(state, { data }) {
                state.tips = data;
            }
        }
    })
};

