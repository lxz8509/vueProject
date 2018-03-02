<template>

    <div>
        <div>
            <img src="../../../assets/imges/admin.jpg" alt="">
        </div>
        <el-menu class="el-menu-vertical-demo"  background-color="wheat" text-color="purple">
            <el-submenu v-for="item in menu" :key='item.tetle' :index="item.title">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span>{{item.title}}</span>
                </template>
                
                    <el-menu-item index="1-1" v-for="sub in item.children" :key="sub.title">
                        <router-link :to="sub.path">
                            {{sub.title}}
                        </router-link>
                  </el-menu-item>
               
            </el-submenu>
        </el-menu>
    </div>

</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "商品管理",
          children: [
            { title: "内容管理", path: "/admin/goods/comment" },
            { title: "类别管理", path: "/admin/goods/detail" },
            { title: "商品列表", path: "/admin/goods/list" }
          ]
        },
        {
          title: "订单管理",
          children: [
            { title: "内容管理", path: "/admin/a" },
            { title: "类别管理", path: "/admin/b" },
            { title: "商品列表", path: "/admin/c" }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
div {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
</style>