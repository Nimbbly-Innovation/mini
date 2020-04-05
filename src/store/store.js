import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex, axios);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],

    state: {
        token: localStorage.getItem('access_token') || null,
        user: [],
        
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        },

        

    },
    actions: {

        //post
        registerUser(context, data) {

            return new Promise((resolve, reject) => {
                axios.post('api/v1/users', {
                    headers: { 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json', 'Content-Type': 'application/json', 'X-CSRF-TOKEN': 'tokenvaluetobeinserted235kwgei0Iulgsk',},
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone_number: data.phone_number,
                    password: data.password,
                    city: data.city,
                })
                .then(({status}) => {
                    console.log(Response)
                    /*if (status === 200) {
                        resolve(true)
                    }*/
                })
                .catch(error => {
                    console.log(error)
                })
            })
        },

    }
})
