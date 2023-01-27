import { createAsyncThunk } from "@reduxjs/toolkit"

import * as authService from '../../services/authService'
import { setToken, unsetToken } from "../../config/axios";

export const register = createAsyncThunk('auth/register', 
    async(credentials, thunkAPI) =>{
        try{
            const response = await authService.register(credentials);
            setToken(response.token)
            return response;
        }catch(error){
            unsetToken()
            return thunkAPI.rejectWithValue(error.response?.data.message || error.message)
        }
    }
)

export const login = createAsyncThunk('auth/login', 
    async(credentials, thunkAPI) =>{
        try{
            const response = await authService.login(credentials);
            console.log(response)
            setToken(response.token)
            return response;
        }catch(error){
            unsetToken()
            return thunkAPI.rejectWithValue(error.response?.data.message || error.message)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', 
    async(thunkAPI) =>{
        try{
            const response = await authService.logout();
            unsetToken()
            return response;
        }catch(error){
            unsetToken()
            return thunkAPI.rejectWithValue(error.response?.data.message || error.message)
        }
    }
)