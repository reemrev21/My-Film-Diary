<template>
    <div class = "all">
        <div class = "all-content">
            <div class = "main-content">
                <component v-bind:is="sel" v-on:regist="registed"></component>
                <b-button v-on:click="sel='LoginForm'">Login</b-button>&nbsp;
                <b-button v-on:click="sel='Regist'">Regist</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '../components/Login/LoginForm.vue';
import Regist from '../components/Login/Regist.vue';
  export default {
    data: function(){
      return{
        sel: 'LoginForm'
      }
    },
    components: {
      LoginForm,
      Regist
    },
    methods:{
      registed(){
        this.sel = 'LoginForm';
      }
    }
  }
</script>
<style scoped>
    .main-content {
        margin: 0px 30px 0px 30px;
        width : 200;
    }

    .all-content {
        float : center;
        padding: 150px;
    }
</style>