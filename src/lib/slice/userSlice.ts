
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface UserState{
    id:String,
    role:String,
    name:String,
    MobileNo:Number,

}

const initialState:UserState={
    id:"",
    role:"",
    name:"",
    MobileNo:0,
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails:(
            state,
            action:PayloadAction<{
                id:String;
                role:String;
                name:String;
                mobileNo:Number;

            }>

        )=>{
            const {id,role,name,mobileNo}=action.payload;
            state.id=id;
            state.role=role;
            state.name=name;
            state.MobileNo=mobileNo;
        }
    }
})

export const {setUserDetails}=userSlice.actions;
export const selectUserDetails=(state:{user:UserState})=>state.user;

export default userSlice.reducer;