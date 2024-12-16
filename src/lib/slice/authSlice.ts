
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState{
    role:string;
    isAuth:boolean,
    accessToken:string;
}

const initialState:AuthState={
    role:"",
    isAuth:false,
    accessToken:"",
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setRole:(state,action:PayloadAction<string>)=>{
            state.role=action.payload;
        },
        setIsAuth:(state,action:PayloadAction<boolean>)=>{
            state.isAuth=action.payload;
        },
        setAccessToken:(state,action:PayloadAction<string>)=>{
            state.accessToken=action.payload;
        }

    }
});

export const {setRole,setIsAuth,setAccessToken}=authSlice.actions;
export const selectRole=(state:{auth:AuthState})=>state.auth.role;
export const selectIsAuth=(state:{auth:AuthState})=>state.auth.isAuth;
export const selectAccessToken=(state:{auth:AuthState})=>state.auth.accessToken;

export default authSlice.reducer