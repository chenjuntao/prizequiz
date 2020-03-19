<template>
  <div>
    <mt-header fixed class="header" title="请选择您的身份"></mt-header>
    <mt-picker :slots="slots" id="telPicker" @change="telChange"></mt-picker>
    <mt-field label="手机号" placeholder="请输入您的手机号" type="tel" v-model="tel"></mt-field>
    <mt-button type="primary" @click.native="startClick">开始答题</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "login",
  data() {
    return {
      tel: "",
      slots: [{ values: [] }]
    };
  },
  mounted() {
    this.axios
      .get("api/user/getUserList/" + this.$store.role)
      .then(response => {
        let dat = response.data;
        for (let i of dat) {
          this.slots[0].values.push(i.name);
        }
      })
      .catch(response => {
        console.log(response);
      });
  },
  methods: {
    startClick() {
      this.axios
        .get("api/user/getTelphone/" + this.$store.name)
        .then(response => {
          let dat = response.data;
          if (dat.length > 0) {
            if (dat[0].tel == this.tel) {
              this.$router.replace("quiz");
            } else {
              Toast("手机号码不正确！");
            }
          } else {
            Toast("无法找到对应的手机号码！");
          }
        })
        .catch(response => {
          console.log(response);
        });
    },
    telChange(picker, values) {
      this.$store.name = values[0];
    }
  }
};
</script>