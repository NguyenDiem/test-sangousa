<template>
  <div class="home w-full h-full bg-home flex justify-center items-center flex-col">
    <div class="text-5xl font-bold text-home">sangousa</div>
    <button
      class="text-small ml-32 cursor-pointer hover:font-bold"
      @click="goInput"
    >Input number of player</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    goInput() {
      this.$router.push({ name: "landing" });
    }
  }
};
</script>
<style>
.bg-home {
  background-color: #161617;
}
.text-home {
  color: #dadada;
}
.text-small {
  color: #f7cbc7;
}
</style>

