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
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>
