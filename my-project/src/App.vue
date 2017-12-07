<template>
  <div id="app">
    <div>{{name}}{{num}}</div>
    <input type="button" value="login" @click="login"/> 
    <input type="button" value="products" @click="products"/>
    <spinner v-show="show"></spinner>
    <router-view></router-view>
  </div>
</template>

<script>
  import spinner from './components/spinner/spinner.vue'
  import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num:1021,
      name:'cxlhhhhhh',
      show:false
    }
  },
  methods:{
    login:function(){
        this.$router.push({name:'login'});
    },
    products:function(){
        this.show=true;
            axios({
                url:'http://localhost/222/php/goods.php',
                methods:'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(res){
                this.show=false;
                console.log(this.show);
                this.$router.push({name:'products'});
            }.bind(this))
    }
  },
  components:{
    spinner:spinner
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
