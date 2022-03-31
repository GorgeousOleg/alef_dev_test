<template>
    <div class="Form">
        <div class="Pers_data">
            <p class="p1">Персональные данные</p>
            <div v-if="Name != ''">
                <h1 class="name">{{Name}}{{', ' + Age}}</h1> 
            </div>           
            <div v-if="Kids.length > 0 && Kids[0].kid_age!=null && Kids[0].kid_age!=undefined">
                <p class="p1">Дети</p>
                <div v-for=" (kid_name, index) in Kids" :key="index">
                    <div class="kid_box">
                        <h1 class="kid_name">{{Kids[index].kid_name}}</h1>
                        <h1 class="kid_name">, {{Kids[index].kid_age}}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import vuex from 'vuex'
export default Vue.extend({    
    data(){
        return{
            Name: this.$store.state.SavedProfile.name,            
            Age: this.$store.state.SavedProfile.age,            
            Kids: this.$store.state.SavedProfile.kids
        }
    },
})
</script>

<style lang="scss">
    .name{
        margin-top: 20px;
        margin-bottom: 60px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
    }   
    .kid_box{
        display: inline-flex;
        line-height: 24px;        
        height: 44px;
        margin-bottom: 20px;        
        padding: 10px 20px;
        background-color: #F1F1F1;
        border-radius: 5px;
    } 
    .kid_name{
        display: flex;
        align-items: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
    }
</style>