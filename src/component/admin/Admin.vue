<template>
    <div class="admin">
        <!-- 此地是整体布局 -->
        <el-container>
            <!-- 左侧 -->
            <el-aside width="200px">
                <app-aside></app-aside>
            </el-aside>
            <el-container>
                <!-- 头部 -->
                <el-header>
                    <app-header></app-header>
                </el-header>

                
                <el-main>
                    <router-view></router-view>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";
export default {
  components: {
    appHeader: Header,
    appAside: Aside
  }
};
</script>
<style scoped lang="less">
.admin {
  height: 100%;
}
.el-header {
  background-color:wheat;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: wheat;
  height: 100%;
}
.el-main {
  background-color: rgb(230, 247, 209);
}
.el-container {
  height: 100%;
}
</style>