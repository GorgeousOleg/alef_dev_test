import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    First: false,
    SavedProfile:{
      name: '',
      age: null,
      kids:[{
        kid_name: '',
        kid_age: null
      }],
    }, 
    profile:{
      name: '',
      age: null,
      kids:[{
        kid_name: '',
        kid_age: null
      }],
    },   
  },
  mutations: {
    ADD_PROFILE: (state) => {
      // state.SavedProfiles.push(state.profile);      
        state.SavedProfile.name = state.profile.name;
        state.SavedProfile.age = state.profile.age;
        state.SavedProfile.kids = [];
        if (state.profile.kids.length != 0){
          for(let i = 0; i<state.profile.kids.length; i++){
            state.SavedProfile.kids.push({
              kid_name: '',
              kid_age: null
            })
            state.SavedProfile.kids[i].kid_name = state.profile.kids[i].kid_name;
            state.SavedProfile.kids[i].kid_age = state.profile.kids[i].kid_age;
          } 
        }       
    },
    ADD_KID: (state) =>{
      state.profile.kids.push({      
        kid_name: '',
        kid_age: null})
    }
    ,
    DELETE_KID: (state, {num}) =>{
      if(state.profile.kids.length != 1){
        state.profile.kids = state.profile.kids.slice(num, state.profile.kids.length);
      } else {
        state.profile.kids[0] = {
          kid_name: '',
          kid_age: null};
        state.First = false
      }
    },
    RECORD_NAME: (state, Name) =>{
      state.profile.name = Name;
    },
    RECORD_AGE: (state, Age) =>{
      state.profile.age = Age;
    },
    RECORD_KID_AGE:(state, {num, kid_age}) =>{
      state.profile.kids[num].kid_age = kid_age;
    },
    RECORD_KID_NAME:(state, {num, kid_name}) =>{
      state.profile.kids[num].kid_name = kid_name;
    },
    FIRST:(state, First) =>{
      state.First = !First;
    }

  },
  actions: {},
  modules: {},
});
