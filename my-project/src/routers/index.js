import Vue from 'vue'
import VueRouter from 'vue-router'
import loginComponent from '../components/login/login.vue'
import productsComponent from '../components/products/products.vue'
Vue.use(VueRouter);
var routes=new VueRouter({
    routes:[
       {
            path:'/login',
            name:'login',
            component:loginComponent
       },
       {
            path:'/products',
            name:'products',
            component:productsComponent
       },
       {
            path:'/register',
            name:'register',
            component:{
                template:'<h1>哈哈</h1>'
            }
       }
    ]
});
export default routes;