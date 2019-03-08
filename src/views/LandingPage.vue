<template>
  <div class="landingPage w-full h-full bg-landing py-20">
    <div class="w-3/4 h-full bg-white mx-auto">
      <div
        v-if="showInputPanel === 'SCORE'"
        class="bg-white mx-auto h-full flex items-center justify-center"
      >
        <ScorePanel @showResult="showInputPanel = 'RESULT'"/>
      </div>
      <div
        v-if="showInputPanel === 'RESULT'"
        class="bg-white mx-auto h-full w-full flex justify-center"
      >
        <ResultPanel @newRound="showInputPanel = 'SCORE'" @back="showInputPanel = 'SCORE'"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScorePanel from "@/components/ScorePanel.vue";
import ResultPanel from "@/components/ResultPanel.vue";

export default {
  name: "landingPage",
  components: {
    ScorePanel,
    ResultPanel
  },
  data() {
    return {
      showInputPanel: "SCORE"
    };
  }
};
</script>
<style  scoped>
.h-200px {
  height: 200px;
}
.bg-landing {
  background-image: url("~@/assets/dynasty-warriors-9-official-launch-trailer_k3x7.png");
}
</style>

