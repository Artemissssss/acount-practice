import {createSlice} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import { login, logout, register } from '../../services/authService';

const initialState = {
    user:null,
    token:null,
    loading:false,
    error:null
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers:{
        [register.pending](state, {payload}){
            state.loading = true;
        },
        [register.fullfilled](state, {payload}){
            state.user = payload.user;
            state.token = payload.token;
            state.loading = false;
            state.error = initialState.error;
        },
        [register.rejected](state,{payload}){
            state.error = payload;
            state.loading =  false;
        },
        [login.pending](state, {payload}){
            state.loading = true;
        },
        [login.fullfilled](state, {payload}){
            state.user = payload.user;
            state.token = payload.token;
            state.loading = false;
            state.error = initialState.error;
        },
        [login.rejected](state,{payload}){
            state.error = payload;
            state.loading =  false;
        },
        [logout.pending](state, {payload}){
            state.loading = true;
        },
        [logout.fullfilled](state, {payload}){
            state.user = initialState.user;
            state.token = initialState.token;
            state.loading = initialState.loading;
            state.error = initialState.error;
        },
        [logout.rejected](state,{payload}){
            state.error = payload;
            state.loading =  false;
        },
    }
});

export const authReducer = persistReducer({
    key:"auth",
    blacklist:['loading','error'],
    storage,
}, authSlice.reducer);