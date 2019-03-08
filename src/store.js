import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberPlayer: 0,
    players: [],
    money: null,
    id: 0,
  },
  getters: {
    getNumberPlayer: state => {
      return state.numberPlayer;
    },
    getPlayers: state => {
      return state.players;
    },
    getMoney: state => {
      return state.money;
    }
  },
  mutations: {
    inputNumber(state, n) {
      state.numberPlayer = n;
    },
    increasePlayer(state) {
      state.numberPlayer += 1;
      state.id += 1;
      state.players.push({
        id: state.id,
        score: 0,
        money: 0
      });
    },
    updateMoney(state, money) {
      state.money = money;
    },
    updatePlayer(state, ar) {
      state.players = ar;
    },
    updateName(state, ar) {
      state.players = state.players.concat(ar);
      state.numberPlayer = state.players.length;
    },
    deletePlayer(state, id) {
      state.players = state.players.filter(player => player.id !== id);
      state.numberPlayer = state.players.length;
    },
    resetStore(state) {
      state.players = [];
      state.money = null;
      state.numberPlayer = 0;
    }
  },
  actions: {}
});