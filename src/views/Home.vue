<template>
  <div class="home w-full h-full bg-home flex justify-center items-center flex-col">
    <img src="@/assets/DC0EEC19-6941-4F4D-BE82-F605A9C45E2F.png" alt="logo">
    <button
      class="text-small text-lg ml-32 cursor-pointer hover:font-bold"
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
  background-image: url("~@/assets/cropped-1920-1080-838166 (3).jpg");
}
.text-home {
  color: #dadada;
}
.text-small {
  color: #f6eb9e;
}
</style>

