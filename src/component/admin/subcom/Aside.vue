<template>
    <el-row class="tac">
                    <el-col :span="12">
                        <div>
                            <img src="../../../assets/imges/admin.jpg" alt="">
                        </div>
                        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="wheat" text-color="purple" >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>学员问题汇总</span>
                                </template>
                                <el-menu-item index="1-1">内容管理</el-menu-item>
                                <el-menu-item index="1-2">类别管理</el-menu-item>
                                <el-menu-item index="1-3">评论管理</el-menu-item>
                            </el-submenu>

                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>前端常用功能</span>
                                </template>
                                <el-menu-item index="1-1">内容管理</el-menu-item>
                                <el-menu-item index="1-2">类别管理</el-menu-item>
                                <el-menu-item index="1-3">评论管理</el-menu-item>
                            </el-submenu>

                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>重难点专区</span>
                                </template>
                                <el-menu-item index="1-1">内容管理</el-menu-item>
                                <el-menu-item index="1-2">类别管理</el-menu-item>
                                <el-menu-item index="1-3">评论管理</el-menu-item>
                            </el-submenu>


                            <el-submenu index="5">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>购物商城</span>
                                </template>
                                <el-menu-item index="1-1">内容管理</el-menu-item>
                                <el-menu-item index="1-2">类别管理</el-menu-item>
                                <el-menu-item index="1-3">评论管理</el-menu-item>
                            </el-submenu>

                            <el-submenu index="6">
                                <template slot="title">
                                    <i class="el-icon-message"></i>
                                    <span>订单管理</span>
                                </template>
                                <el-menu-item index="1-1">内容管理</el-menu-item>
                                <el-menu-item index="1-2">类别管理</el-menu-item>
                                <el-menu-item index="1-3">评论管理</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
</template>

<script>
export default {
    methods:{
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
.el-col-12 {
    width: 100%;
    background-color: rgb(203, 245, 245);
}
.el-col{
    div{
        width: 100%;
        img{
            width: 100%;
            display: block;
        }
    }
}
</style>