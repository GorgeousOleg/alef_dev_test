import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SavedProfiles:[{
      name: String,
      age: Number,
      kids:[{
        kid_name: String,
        kid_age: Number
      }]
    }], 
    profile:{
      name: String,
      age: Number,
      kids:[{
        kid_name: String,
        kid_age: Number
      }]
    },   
  },
  mutations: {
    ADD_PROFILE: (state) => {
      state.SavedProfiles.push(state.profile);
      // state.SavedProfiles[state.SavedProfiles.length] = state.profile;      
    },
    ADD_KID: (state) =>{
      state.profile.kids.push({      
        kid_name: String,
        kid_age: Number})
    }
    ,
    DELETE_KID: (state, {num}) =>{
      state.profile.kids = state.profile.kids.slice(num, state.profile.kids.length);
    },
    RECORD_NAME: (state, Name) =>{
      state.profile.name = Name;
    },
    RECORD_AGE: (state, Age) =>{
      state.profile.age = Age;
    },
    RECORD_KID_AGE:(state, {num, Kid_age}) =>{
      state.profile.kids[num].kid_age = Kid_age;
    },
    RECORD_KID_NAME:(state, {num, Kid_name}) =>{
      state.profile.kids[num].kid_name = Kid_name;
    }

  },
  actions: {},
  modules: {},
});
