import React, { useContext, useEffect } from "react"
import { Header } from "../components/Header"
import { AuthContext } from "../contexts/AuthProvider"
import { Outlet, useNavigate } from "react-router-dom"

export function DefaultLayout () {
  const { userAdm, setUserAdm } = useContext(AuthContext)
  const navigate= useNavigate()
  useEffect(()=>{
    if(!userAdm){
      const user = localStorage.getItem("novace@Admin")
      setUserAdm(JSON.parse(user))
      if(!user){
        navigate("/")
      }
    }
  },[])
  return (
    <div className="flex flex-col">
      
      <Outlet />
    </div>
  )
}