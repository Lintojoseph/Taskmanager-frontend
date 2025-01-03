
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState{
  
    isAuth:boolean,
    accessToken:string;
}

const initialState:AuthState={
   
    isAuth:false,
    accessToken:"",
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        
        setIsAuth:(state,action:PayloadAction<boolean>)=>{
            state.isAuth=action.payload;
        },
        setAccessToken:(state,action:PayloadAction<string>)=>{
            state.accessToken=action.payload;
        }

    }
});

export const {setIsAuth,setAccessToken}=authSlice.actions;

export const selectIsAuth=(state:{auth:AuthState})=>state.auth.isAuth;
export const selectAccessToken=(state:{auth:AuthState})=>state.auth.accessToken;

export default authSlice.reducer