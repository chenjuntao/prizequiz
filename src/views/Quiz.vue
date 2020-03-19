<template>
  <div>
    <mt-header fixed title="第一题"></mt-header>
    <textarea rows="10">
    问：生命人寿保险股份有限公司湖南分公司在哪里?
    </textarea>
    <mt-radio title="答案列表" v-model="selected" :options="this.answers"></mt-radio>
    <mt-button type="default" @click.native="okClick">下一题</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      answers: [
        {
          label: "A. 长沙市芙蓉区",
          value: "A"
        },
        {
          label: "B. 长沙市开福区",
          value: "B"
        },
        {
          label: "C. 长沙市雨花区",
          value: "C"
        },
        {
          label: "D. 长沙市岳麓区",
          value: "D"
        }
      ]
    };
  },
  methods: {
    okClick() {
      this.$router.push("prize");
    },
  }
};
</script>
<style scoped>
textarea {
  margin-top: 50px;
  font-size: x-large;
}
</style>