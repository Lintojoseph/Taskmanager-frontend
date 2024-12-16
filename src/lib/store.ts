
import { configureStore } from "@reduxjs/toolkit";
import authReducer from  './slice/authSlice';
import userReducer from './slice/userSlice';

export const makeStore=()=>{
    return configureStore({
        reducer:{
            auth:authReducer,
            user:userReducer,

        }
    })
}

export type AppStore=ReturnType<typeof makeStore>;

export type RootState=ReturnType<AppStore['getState']>;
export type AppDispatch=AppStore['dispatch'];