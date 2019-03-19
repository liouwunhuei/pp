import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MENU_URL = './src/menuData.json';

const store = new Vuex.Store({
  state:{
    menus: [],
  },
  mutations:{
    setmenulist(state, menulist){
      state.menus = menulist;
    },
  },
  actions:{
    fetchMenu({commit}){
      fetch(MENU_URL)
        .then(rs=>rs.json())
        .then(rs=>{
          commit('setmenulist', rs);
        });
    },
  },
});

export default store;