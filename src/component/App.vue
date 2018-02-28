<template>
   <div>
{{msg}}
 <router-view></router-view>
  <el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
   </div>
</template>
<script>
export default{
    data(){
        return{
            msg:'hello 0.0',
            value1: true,
            value2: true

        }
    },
    created() {
           this.$http.get(this.$api.logout).then(() => console.log('退出登陆'))
         }
}
</script>
<style>
div{
    color:pink
}
</style>