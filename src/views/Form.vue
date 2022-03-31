<template>
<div class="Form">
    <div class="Pers_data">
        <p class="p1">Персональные данные</p>
        <div class="input_line">
            <p class="p2">Имя</p>
            <input type="text" class="input_text" pattern="[A-Za-zА-Яа-яЁё]" @input="fInputName" :value="Name">
        </div>
        <div class="input_line">
            <p class="p2">Возраст</p>
            <input type="number" class="input_text" @input="fInputAge" :value="Age">
        </div>
    </div> 
    <button class="Add" @click="fAddKid"><p class="p4">+</p>Добавить ребенка</button>
    <div v-if="First || Kids[0].kid_age != null">
        <p class="p3">Дети (макс. 5)</p> 
        <div class="Kids_data" v-for="(kid_name, index) in this.Kids" :key="index">        
            <div class="input_line_kids">
                <p class="p2">Имя</p>
                <input type="text" class="input_text" v-model="Kids[index].kid_name" @input="fInputKidName">
            </div>
            <div class="input_line_kids">
                <p class="p2">Возраст</p>
                <input type="number" class="input_text" v-model="Kids[index].kid_age" @input="fInputKidAge">
            </div>
            <button class="Delete" @click="fDeleteKid(index)">Удалить</button>
        </div>
    </div>
    <button class="save" @click="fSave">Сохранить</button>
        <h1>{{First}}</h1>
        <h2>{{$store.state.profile}}</h2>
        <h2>{{$store.state.SavedProfile}}</h2>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import vuex from 'vuex'
export default Vue.extend({    
    data(){
        return{
            msg: '',
            First: this.$store.state.First,
            Name: this.$store.state.profile.name,            
            Age: this.$store.state.profile.age,            
            Kids: this.$store.state.profile.kids
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
            if (this.First == false){
                this.First = true; 
            } else {
                if(this.Kids.length<5){
                this.$store.commit('ADD_KID')
                }
            }                      
        },
        fInputKidName(){  
            for(let i = 0; i < this.Kids.length; i++) {
                this.$store.commit('RECORD_KID_NAME', {
                num: i,
                kid_name: this.Kids[i].kid_name
                })
                return
            } 
        },
        fInputKidAge(){  
            for(let i = 0; i < this.Kids.length; i++) {
                this.$store.commit('RECORD_KID_AGE', {
                num: i,
                kid_age: this.Kids[i].kid_age
                })
            } 
        },
        fDeleteKid(index:number){
            this.$delete(this.Kids, index)
            if (this.Kids.length > 0){
                this.fInputKidName();
                this.fInputKidAge();
            } else {
                this.First == false
                this.$store.commit('ADD_KID')
                }
            
        },
        fSave(){
            var err = [];
            var name_check = false;
            var age_check = false;
            var kids_check_name = [];
            var kids_check_age = [];

            if (this.Name.length > 1)
            {name_check = true}
            else {err.push('своё имя')}
            if (this.Age < 99 && this.Age > 18)
            {age_check = true}
            else {err.push('свой возраст')}
            if(this.First == true){
                for(var i = 0; i < this.Kids.length; i++){
                    if (this.Kids[i].kid_name.length < 2){
                        console.log(i);
                        kids_check_name.push({
                            id: i 
                        })
                    }
                    if (this.Kids[i].kid_age > 18 || this.Kids[i].kid_age == null){
                        kids_check_age.push({
                            id: i
                        })
                    }                
                }
                if (kids_check_name.length > 0){
                        err.push('имя ребёнка')
                }
                if (kids_check_age.length != 0){
                        err.push('возраст ребёнка')
                }
            }
            if (name_check == false || age_check == false || kids_check_name.length != 0 || kids_check_age.length != 0){
                if(err.length != 1){
                    this.msg = 'Укажите ' + err[0]
                    for (var x = 1; x<err.length-1; x++){
                        this.msg += ', ' + err[x];
                    }
                    this.msg += ', ' + err[err.length-1] + '.';
                } else {
                    this.msg = 'Укажите ' + err[0] + '.'
                }                
                alert(this.msg)
            } else {this.$store.commit('ADD_PROFILE');}
        },
    },   
    mounted(){
        if(this.Kids[0].kid_name != ''){
            this.First = true
        }
        
    }
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
    }.save:hover{        
        cursor: pointer;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
</style>