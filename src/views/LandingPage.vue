<template>
  <div class="landingPage w-full h-full bg-landing py-20">
    <div class="w-3/4 h-full bg-white mx-auto">
      <div v-if="showInputPanel === 'NUMBER'" class="w-full h-full">
        <AddnumberPanel @complete="showInputPanel = 'NAME'"/>
      </div>
      <div v-if="showInputPanel === 'NAME'" class="w-full h-full bg-white mx-auto">
        <AddName @completeName="showInputPanel = 'SCORE'"/>
      </div>
      <div
        v-if="showInputPanel === 'SCORE'"
        class="bg-white mx-auto h-full flex items-center justify-center"
      >
        <ScorePanel @addPlayer="showInputPanel = 'NAME'" @showResult="showInputPanel = 'RESULT'"/>
      </div>
      <div
        v-if="showInputPanel === 'RESULT'"
        class="bg-white mx-auto h-full w-full flex justify-center"
      >
        <ResultPanel @newRound="showInputPanel = 'NUMBER'" @back="showInputPanel = 'SCORE'"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddName from "@/components/AddName.vue";
import AddnumberPanel from "@/components/AddNumber.vue";
import ScorePanel from "@/components/ScorePanel.vue";
import ResultPanel from "@/components/ResultPanel.vue";

export default {
  name: "landingPage",
  components: {
    AddnumberPanel,
    AddName,
    ScorePanel,
    ResultPanel
  },
  data() {
    return {
      showInputPanel: "NUMBER"
    };
  }
};
</script>
<style  scoped>
.h-200px {
  height: 200px;
}
.bg-landing {
  background: linear-gradient(
    287deg,
    rgba(226, 226, 226, 1) 0%,
    rgba(249, 249, 249, 1) 100%
  );
}
</style>

