<template>
    <div class="list">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 按钮 -->
        <el-button type="primary" plain size="mini" icon="el-icon-circle-plus-outline">新增</el-button>
        <el-button type="success" plain size="mini" icon="el-icon-check">全选</el-button>
        <el-button type="danger" plain size="mini" icon="el-icon-delete" @click="del">删除</el-button>
        <!-- 搜索框 -->
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="seachValue.searchvalue" @blur="change"></el-input>
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <!-- 表格 -->
            <el-table-column label="标题" width="320">
                <template slot-scope="scope">
                    <router-link :to="{name:'goodDetail'}" style='color:#9acd32'>
                        {{scope.row.title}}
                    </router-link>
                </template>
            </el-table-column>

            <el-table-column prop="categoryname" label="所属类别" width="120"></el-table-column>
            <el-table-column prop="market_price" label="库存" width="120"></el-table-column>
            <el-table-column prop="sell_price" label="市场价" width="120"></el-table-column>
            <el-table-column prop="sort_id" label="销售价" width="120"></el-table-column>
            <el-table-column prop="" label="属性" width="120"></el-table-column>
            <el-table-column prop="sort_id" label="销售价" width="120"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [],
      seachValue: {
        pageIndex: 1,
        pageSize: 10,
        searchvalue: ""
      },

      deldata:[]
    };
  },
  methods: {
    //   删除商品
    del() {
        // 获取要删除商品的ID
        let delId = this.deldata.map((v)=>{
            return v.id
        })
        // console.log(delId);
        // 向后台根据ID发送数据
        this.$http.get(this.$api.gsDel+delId).then((res)=>{
            if(res.data.status==0){
                this.getData();
            }

        })
    },
    //   搜索商品
    change() {
      this.getData();
    
    },
    //   发送数据请求进行商品展示
    getData() {
      let getGoods = `${this.$api.gsList}?pageIndex=${
        this.seachValue.pageIndex
      }&pageSize=${this.seachValue.pageSize}&searchvalue=${
        this.seachValue.searchvalue
      }`;
      this.$http.get(getGoods).then(res => {
        // console.log(res.data.status)
        if (res.data.status == 0) {
          //   console.log(res.data.message)
          this.tableData3 = res.data.message;
        }
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
    //    val值是这条被选中的商品的详细信息

      this.deldata = val;    //将选中的商品信息添加到data中的deldata中
      
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
.el-button {
  margin-top: 20px;
}
.el-input {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 200px;
  float: right;
}
</style>