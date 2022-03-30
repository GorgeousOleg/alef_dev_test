<template>
    <div class="Header">
      <img class="Logo" src="../assets/Logo.png"/>
      <div class="Links_box">
          <router-link class="Link" to="/">Форма</router-link>
          <router-link class="Link" to="/Preview">Превью</router-link>
      </div>
    </div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {  
}
</script>
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  .Header{
    display: flex;
    width: 100%;
    height: 76px;
    box-shadow: 0px 1px 0px
    rgba(17, 17, 17, 0.1);
  }
  .Logo{
    margin-top: 22px; 
    margin-left: 50px;
    display: flex;
    height: 32px;
    width: auto;    
    background-image: url(../assets/Logo.png);
  }
  .Links_box{ 
    position: relative;  
    margin-left: calc(100% / 2 - 200px);  
    display: flex;
    align-items: stretch;  
    margin-top: 0;
  }
  .Link{    
    width: 117px;
    padding-top: 28px;

    text-decoration: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: rgba(17, 17, 17, 0.48);    
  }
</style>