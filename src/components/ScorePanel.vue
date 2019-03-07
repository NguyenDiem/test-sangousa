/* eslint-disable */
<template>
  <div class="flex flex-col py-10 w-full px-10 h-full">
    <div class="font-bold text-2xl text-center mb-10">score panel</div>
    <div class="score-panel overflow-y-auto mb-5">
      <div
        v-for="player in players"
        :key="player.id"
        class="border-2 mb-5 h-32 rounded flex items-center justify-between px-5 h-100px jutify-between"
      >
        <div class="font-bold text-3xl w-2/3 text-color">{{player.name}}</div>
        <div class="flex flex-inline items-center w-1/3">
          <input v-model="player.score" class="input-score w-2/3">
          <button class="font-bold text-xl" @click="deletePlayer(player.id)">Delete</button>
        </div>
      </div>
    </div>
    <div class="flex justify-between w-full items-center mb-5">
      <div class="text-xl font-bold">Add money</div>
      <input class="w-1/3 border-2 rounded" placeholder="Input money: " v-model="money">
    </div>
    <div class="flex justify-between w-full items-center">
      <button class="font-bold text-3xl text-color" @click="addPlayer">AddPlayer</button>
      <button class="font-bold text-3xl text-color" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      players: "getPlayers"
    })
  },
  data() {
    return {
      money: 0,
      scorePlayer: [],
      moneyPart: 0
    };
  },
  methods: {
    submit() {
      this.scorePlayer = this.players.sort(this.compare);
      this.sharePart();
      this.findMoney();
      this.$emit("showResult");
    },
    compare(a, b) {
      if (a.score < b.score) return -1;
      if (a.score > b.score) return 1;
      return 0;
    },
    sharePart() {
      let share = 0;
      for (let i = 1; i <= this.scorePlayer.length; i++) {
        share = share + i;
      }
      this.moneyPart = (this.money / share).toFixed(2);
    },
    findMoney() {
      let i = 1;
      let j = 0;
      let u, k;

      while (i <= this.scorePlayer.length) {
        j = this.scorePlayer.filter(
          player => player.score === this.scorePlayer[i - 1].score
        ).length;
        k = 0;
        for (u = i; u <= i + j - 1; u++) {
          k = k + u;
        }
        k = k / j;
        for (u = i; u <= i + j - 1; u++) {
          this.scorePlayer[u - 1].money = (this.moneyPart * k).toFixed(0);
        }
        i = i + j;
      }
      this.$store.commit("updatePlayer", this.scorePlayer);
    },
    addPlayer() {
      this.$store.commit("increasePlayer");
      this.$emit("addPlayer");
    },
    deletePlayer(key) {
      this.$store.commit("deletePlayer", key);
    }
  }
};
</script>

<style scoped>
input {
  padding-left: 20px;
  font-size: 60px;
}
input:focus {
  outline: none;
}
.score-panel {
  height: 55vh;
}
.text-color {
  color: #5d616a;
}
.h-100px {
  height: 100px;
}
</style>