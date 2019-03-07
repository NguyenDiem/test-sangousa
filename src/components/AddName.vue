<template>
  <div class="flex items-center flex-col h-full pt-10">
    <div class="flex w-full flex-wrap justify-center mb-10 input-area">
      <input
        v-for="player in newPlayer"
        :key="player.id"
        placeholder="Input name"
        v-model="player.name"
        class="name-input w-1/3 mx-3"
      >
    </div>
    <button class="text-3xl font-bold w-1/3 ml-auto text-color" @click="submit">Submit</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      numberPlayer: "getNumberPlayer",
      players: "getPlayers"
    })
  },
  data() {
    return {
      newPlayer: [],
      money: 0
    };
  },
  created() {
    for (var i = 1; i <= this.numberPlayer - this.players.length; i++) {
      this.newPlayer.push({
        id: i,
        name: "",
        score: 0,
        money: 0
      });
    }
  },
  methods: {
    submit() {
      this.newPlayer = this.newPlayer.filter(player => player.name !== "");
      this.$store.commit("updateName", this.newPlayer);
      this.$emit("completeName");
    }
  }
};
</script>

<style scoped>
.input-area {
  max-height: 60vh;
  overflow-y: auto;
}
input {
  padding: 20px 20px 10px 0px;
  border-bottom: 2px solid #5d616a;
  color: #5d616a;
  font-size: 30px;
}
input::placeholder {
  color: #e2e2e2;
  font-size: 30px;
}
input:focus {
  outline: none;
}
.text-color {
  color: #5d616a;
}
</style>