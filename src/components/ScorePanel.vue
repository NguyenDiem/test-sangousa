/* eslint-disable */
<template>
  <div class="flex flex-col py-10 w-full px-10 h-full">
    <img
      src="@/assets/DC0EEC19-6941-4F4D-BE82-F605A9C45E2F.png"
      alt="logo"
      class="-mt-32 flex mx-auto"
    >
    <div class="font-bold text-2xl text-center mb-10">score panel</div>
    <div class="score-panel overflow-y-auto mb-5">
      <div
        v-for="player in players"
        :key="player.id"
        class="border-2 mb-5 lg:h-32 h-20 rounded flex items-center justify-between px-5 jutify-between"
      >
        <div class="flex flex-inline items-center w-2/3">
          <div class="font-bold lg:text-3xl text-base w-1/3 text-color mr-5">Score</div>
          <input v-model="player.score" class="input-score w-2/3">
        </div>
        <button class="font-bold lg:text-xl text-base" @click="deletePlayer(player.id)">Delete</button>
      </div>
    </div>
    <div class="flex justify-between w-full items-center mb-5">
      <div class="text-xl font-bold">Add money</div>
      <input class="w-1/3 border-2 rounded" placeholder="Input money: " v-model="money">
    </div>
    <div class="flex justify-between w-full items-center">
      <button class="font-bold lg:text-3xl text-base text-color" @click="addPlayer">Add new player</button>
      <button class="font-bold lg:text-3xl text-base text-color" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      players: "getPlayers",
      numberPlayer: "getNumberPlayer"
    })
  },
  data() {
    return {
      money: 0,
      scorePlayer: [],
      moneyPart: 0
    };
  },
  created() {
    if (this.numberPlayer === 0) this.$store.commit("increasePlayer");
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
      let share = ((this.numberPlayer + 1) * this.numberPlayer) / 2;
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
    },
    deletePlayer(key) {
      this.$store.commit("deletePlayer", key);
    }
  }
};
</script>

<style scoped>
input {
  font-size: 30px;
}
@media screen and (min-width: 992px) {
  input {
    padding-left: 20px;
    font-size: 60px;
  }
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