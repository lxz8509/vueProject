<template>
   <div>
{{msg}}
 <router-view></router-view>
   </div>
</template>
<script>
export default{
    data(){
        return{
            msg:'hello 0.0'
        }
    }
}
</script>
<style>
div{
    color:pink
}
</style>