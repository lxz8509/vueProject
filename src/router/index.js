import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
import GoodComment from '../component/admin/goods/comment/Comment.vue'
import GoodDetail from '../component/admin/goods/detail/Detail.vue'
import GoodList from '../component/admin/goods/list/List.vue'
Vue.use(VueRouter)
const goods = [
    {name:'goodComment',path:'goods/comment',component:GoodComment},
    {name:'goodDetail',path:'goods/detail',component:GoodDetail},
    {name:'goodList',path:'goods/list',component:GoodList},
]
export default new VueRouter({
    routes:[
        {name:'login',path:'/login',component:Login},
        {name:'admin',path:'/admin',component:Admin,children:[...goods]},
        {name:'aaa',path:"*",redirect:'/login'}
    ]
})