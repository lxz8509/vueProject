<template>
    <div class="list">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        
            <el-button type="success" plain size="mini" icon="el-icon-circle-plus-outline">新增</el-button>
            <el-button type="success" plain size="mini" icon="el-icon-check">全选</el-button>
            <el-button type="success" plain size="mini" icon="el-icon-delete">删除</el-button>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.el-button{
    margin-top: 20px;
}
.el-input{
    margin-top:20px;
    width:200px;
    float: right;   
}

</style>