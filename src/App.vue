<template>
  <div id="app">
    <div class="head">      
      <Header />             
    </div>   
    <div class="page">
      <router-view /> 
    </div>    
  </div>  
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue"; // @ is an alias to /src

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  max-width: 1366px;
  text-align: center;
  margin: 0 auto;
}
.head{
  width: 100%;
  height: 76px;
}
.page{
  width: 100%;
}
</style>
