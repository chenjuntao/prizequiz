<template>
  <div id="app">
    <LuckDraw v-model="currIndex" :awards="awards" @start="handleStart" @end="handleEnd" />
  </div>
</template>

<script>
import Vue from 'vue'
import LuckDraw from "vue-luck-draw";

Vue.use(LuckDraw);

export default {
  data() {
    return {
      currIndex: 1, // 奖品的索引
      awards: [
        // 奖品
        { name: "一等奖  小米恒温电水壶", color: "#f9e3bb" },
        { name: "谢谢光临", color: "#f8d384" },
        { name: "二等奖  小米T300电动牙刷", color: "#f9e3bb" },
        { name: "谢谢光临", color: "#f8d384" },
        { name: "三等奖  一次性医用口罩20个", color: "#f9e3bb" },
        { name: "谢谢光临", color: "#f8d384" },
        { name: "纪念奖  时间走廊笔记本", color: "#f9e3bb" },
        { name: "谢谢光临", color: "#f8d384" }
      ]
    };
  },
  methods: {
    handleStart() {
      console.log("开始抽奖");
    },
    handleEnd(index) {
      console.log(index);
      alert("恭喜您抽到大奖, 奖品为" + this.awards[this.currIndex].name);
    }
  }
};
</script>