"use client"
import { useAuth } from "@/hooks/auth"
import { useEffect, useState } from "react"

export default function RootLayout({
    children,
}:{
    children:React.ReactNode

}) {

    const role='superadmin'
    const {authRole,isauth}=useAuth(role)
    const [showLogin,setshowLogin]=useState(false)

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setshowLogin(true)
        },1000)
        return()=> clearTimeout(timer)
    },[])

}