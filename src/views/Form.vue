<template>
<div class="Form">
    <div class="Pers_data">
        <p class="p1">Персональные данные</p>
        <div class="input_line">
            <p class="p2">Имя</p>
            <input type="text" class="input_text" pattern="[A-Za-zА-Яа-яЁё]" @input="fInputName">
        </div>
        <div class="input_line">
            <p class="p2">Возраст</p>
            <input type="number" class="input_text" @input="fInputAge">
        </div>
    </div> 
    <button class="Add" @click="fAddKid"><p class="p4">+</p>Добавить ребенка</button>
    <p class="p3">Дети (макс. 5)</p> 
    <div class="Kids_data" v-for="(name, index) in this.Kids" :key="index">        
        <div class="input_line_kids">
            <p class="p2">Имя {{index}}</p>
            <input type="text" class="input_text" v-model="Kids[index].name" @input="fInputKidName">
        </div>
        <div class="input_line_kids">
            <p class="p2">Возраст</p>
            <input type="number" class="input_text" v-model="Kids[index].age" @input="fInputKidAge">
        </div>
        <button class="Delete" @click="fDeleteKid(index)">Удалить</button>
    </div>
    <button class="save" @click="fSave">Сохранить</button>
    <h1>{{$store.state.profile}}</h1>
    <h1>{{Kids}}</h1>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import vuex from 'vuex'
export default Vue.extend({    
    data(){
        return{
            Name: String,
            Age: Number,            
            Kids:[{
                name:this.$store.state.profile.kids.kid_name,
                age:this.$store.state.profile.kids.kid_age,
            }],
        }
    },
    methods:{
        fInputName(e:any){
            this.Name = e.target.value
            this.$store.commit("RECORD_NAME", this.Name)
        },
        fInputAge(e:any){
            this.Age = e.target.value
            this.$store.commit("RECORD_AGE", this.Age)
        },
        fAddKid(){     
            if(this.Kids.length<5){
                this.Kids.push({
                name: '',
                age: null});
                this.$store.commit('ADD_KID')
            }            
        },
        fInputKidName(){  
            for(let i = 0; i < this.Kids.length; i++) {
                this.$store.commit('RECORD_KID_NAME', {
                num: i,
                Kid_name: this.Kids[i].name
                })
            } 
        },
        fInputKidAge(){  
            for(let i = 0; i < this.Kids.length; i++) {
                this.$store.commit('RECORD_KID_AGE', {
                num: i,
                Kid_age: this.Kids[i].age
                })
            } 
        },
        fDeleteKid(index:number){
            this.$delete(this.Kids, index);
            this.$store.commit('DELETE_KID', {num:index})
            this.fInputKidName();
            this.fInputKidAge();
        },
        fSave(){
            var sName = this.$store.state.profile.name;
            var sAge = this.$store.state.profile.age;
            var sKids:[{kid_name: string, kid_age: number}] = this.$store.state.profile.kids;
            if(sName != null && sName.length >=3 ){
                this.$store.commit('ADD_PROFILE')
            }
        }
    },   
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    
    .Form{
        margin: 0 auto;
        max-width: 616px;
    }
    .Pers_data{
        margin-top: 30px;
        text-align: left;        
    }
    .Kids_data{
        text-align: left;
        display: flex;        
    }
    .p1{
        margin-bottom: 20px;
        text-align: left;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
    .p2{
        margin-top: 8px;
        margin-left: 16px;
        margin-bottom: 2px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        color: rgba(17, 17, 17, 0.48);
    }
    .p3{
        margin-top: 44px;
        margin-bottom: 20px;
        text-align: left;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
    .input_line{
        align-items: stretch;
        width: 100%;
        height: 56px;
        margin-bottom: 10px;
        border: 1px solid #F1F1F1;
        border-radius: 4px;
    }
    .input_line_kids{
        
        margin-right: 18px;
        width: 260px;
        height: 56px;
        margin-bottom: 10px;
        border: 1px solid #F1F1F1;
        border-radius: 4px;
    }
    .input_text{
        // margin-top: 2px;
        // margin-left: 16px;
        margin: 2px auto 6px;
        width: calc(100% - 32px);
        height: 24px;
        display: flex;
        border: 0;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    } .input_text:focus
    { outline: none;}
    .Delete{
        margin-top: 16px;
        height: 24px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #01A7FD;
        border: 0;
        background-color: white;
    }.Delete:hover
    { text-decoration:underline; cursor: pointer;}
    .Add{   
        margin-top: 30px;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        text-align: center;
        float: right;
        width: 204px;
        height: 44px;
        border: 2px solid #01A7FD;
        box-sizing: border-box;
        border-radius: 100px;   
        background-color: #FFFFFF;
        
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #01A7FD;
    }   
    .Add:hover{        
        cursor: pointer;
    }
    .p4{
        font-size: 30px;
        font-weight: 1000;
        margin-left: 16px;
        margin-right: 10px;
    } 
    .save{
        width: 118px;
        height: 44px;
        margin-top: 30px;
        float: left;
        background: #01A7FD;
        border-radius: 100px;
        border-color: transparent;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #FFFFFF;
    }
</style>