<template>
  <div class="w-full py-10 px-5">
    <img
      src="@/assets/DC0EEC19-6941-4F4D-BE82-F605A9C45E2F.png"
      alt="logo"
      class="-mt-32 flex mx-auto"
    >
    <div class="text-3xl font-bold text-center mb-10">result board</div>
    <div class="result-board">
      <div
        v-for="player in players"
        :key="player.id"
        class="border-b-4 border-black p-5 flex items-center justify-between w-full"
      >
        <div class="font-bold text-2xl">Score: {{player.score}}</div>
        <div class="text-lg">{{player.money}} VND</div>
      </div>
    </div>
    <div class="mt-10 flex items-center justify-between">
      <button class="font-bold text-2xl" @click="back">Back</button>
      <button class="font-bold text-2xl" @click="newRound">New Round</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      players: "getPlayers"
    })
  },
  methods: {
    newRound() {
      this.$store.commit("resetStore");
      this.$emit("newRound");
    },
    back() {
      this.$emit("back");
    }
  }
};
</script>

<style scoped>
.result-board {
  height: 40vh;
  overflow-y: auto;
}
</style>