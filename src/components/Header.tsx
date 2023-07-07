import React, { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"


export function Header(){
  const { Logout } = useContext(AuthContext)

  return (
    <div className="flex items-center gap-4">
        <img className="w-28" src="/Brasao_barra_Mansa.jpeg" alt="" />
        <div className="flex flex-col">
          <h2 className="flex text-2xl text-blue-500 sm:text-3xl font-bold">
            Câmara Municipal de Barra Mansa
          </h2>
          <p className="flex text-gray-500">
            Sistema de Apoio ao Processo Legislativo
          </p>
        </div>
        <button onClick={Logout}>
          Logout
        </button>
      </div>
  )
}