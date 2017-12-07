<template>
    <div>
        <input type="text" v-model="username"/>
        <input type="password" v-model="password"/>
        <input type="button" value="login"@click="login"/>
    </div> 
</template>
<script>
    import  spinner from '../spinner/spinner.vue'
    import  axios from 'axios'
    import  qs from 'qs'
    export default{
        data:function(){
            return {username:'',password:''}
        },
        methods:{
            login:function(){
                axios({
                    url:'http://localhost/222/php/user.php',
                    methods:'post',
                    data:qs.stringify({username:this.username,password:this.password}),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(res){
                    console.log('good');
                }.bind(this))
            }
        },
        components:{
            spinner:spinner
        }
    }
</script>