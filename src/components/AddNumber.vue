<template>
  <div class="w-full h-full bg-number p-5">
    <div class="text-2xl font-bold text-center mb-24 mt-10">number of players</div>
    <div class="flex flex-col">
      <input class="name-input w-1/2 mx-auto mb-10" v-model="playerNumber" placeholder="players">
      <button class="text-3xl font-bold w-1/3 ml-auto text-color" @click="submit">submit</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import ScorePanel from "@/components/ScorePanel.vue";
// import AddnumberPanel from "@/components/AddUser.vue";
export default {
  name: "AddUser",
  components: {},
  data() {
    return {
      playerNumber: 0,
      test: 0
    };
  },
  methods: {
    submit() {
      this.$store.commit("inputNumber", this.playerNumber);
      this.$emit("complete");
    }
  }
};
</script>
<style scoped>
input {
  height: 100px;
  font-size: 60px;
  padding-left: 20px;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: #f0f0f0;
}
.text-color {
  color: #5d616a;
}
</style>
