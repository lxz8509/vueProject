<template>
    <el-dropdown @command="handleCommand" class="headButton">
        <span class="el-dropdown-link">
            hello~{{uname}}
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">修改密码</el-dropdown-item>
            <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      uname: localStorage.getItem("uname")
    };
  },
  methods:{
      logout() {
      this.$http.get(this.$api.logout).then(res => {
        if (res.data.status == 0) {
          this.$router.push({ name: "login" });
        }
      });
    },
    handleCommand(command) {
      if (command == "b") {
        this.logout();
      }
    }


  }
};
</script>

<style scoped lang="less">
.headButton {
  color: purple;
  font-size: 20px;
  position: absolute;
  right: 20px;
}
</style>