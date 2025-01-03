import { selectIsAuth, setIsAuth } from "@/lib/slice/authSlice"
import { setUserDetails } from "@/lib/slice/userSlice"
import { Axios } from "@/services/api"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"



export const useAuth=(rol:string)=>{
    const dispatch=useDispatch()
    const isAuth=useSelector(selectIsAuth)

    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const response=await Axios.get('account/details')

                const userData={
                    id:response.data.data_id,
                    name:response.data.data.name,
                    mobileNo:response.data.data.mobileNo
                    


                }
                if(response.data.data.isSuperAdmin){
                    dispatch(setUserDetails({...userData}))
                    dispatch(setIsAuth(true))
                }


            }
            catch(error:any){
                console.log("error occured",error)
            }
        }
        const checkAuthentication=async()=>{
            const token=localStorage.getItem("refresh_token")
            if(!token){
                dispatch(setIsAuth(false))
            }
            else{
                fetchData()
            }
        }
        checkAuthentication()
    },[isAuth])
    return isAuth

}