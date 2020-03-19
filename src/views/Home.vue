<template>
  <div>
    <div>
      <mt-header fixed class="header" title="富德生命品质有奖知识竞答"></mt-header>
      <img class="img" src="@/assets/homebg.jpg" />
      <div>
        <mt-button type="primary" @click.native="manageClick">管理层进入</mt-button>
        <mt-button type="danger" @click.native="staffClick">专业层进入</mt-button>
      </div>
      <router-view />
    </div>
    <div class="footer">
      <div class="copyright">
        <span>Copyright &copy; 富德生命人寿保险股份有限公司（湖南分公司）</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    manageClick() {
      this.$store.role = '1';
      this.$router.push("login");
    },
    staffClick() {
      this.$store.role = '2';
      this.$router.push("login");
    }
  }
};
</script>
<style scoped>
.img {
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin: 0;
}
.header {
  font-size: 14px;
  height: 39px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  height: 30px;
  line-height: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.footer .copyright {
  font-size: 12px;
  text-align: center;
  width: 100%;
  /* color: #fff; */
  opacity: 0.5;
}
</style>