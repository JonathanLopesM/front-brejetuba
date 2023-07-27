import React, { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from './contexts/AuthProvider'
import { Dashboard } from './pages/Dashboard'
import { Session } from './pages/session/[slug]'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Painel } from './pages/PanelPage'
import { NewUser } from './pages/NewUser'
import ModalEdit from './components/NewUser/ModalEdit'


function App() {
  const { authenticated, sessions } = useContext(AuthContext)
  
  const Private = ({ children }) => {
    const { authenticated, sessions } = useContext(AuthContext)
    console.log(authenticated, "no app")
    if (!authenticated) {
      return <Navigate to='/' />
    }
    return children
  }
  console.log(sessions, 'sessions no app')

  return (
    <AuthProvider>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sessoes' element={<Private><DefaultLayout /></Private>}>
          <Route path='/sessoes' element={<Private> <Dashboard /> </Private>} />
          <Route path='/sessoes/cadastros' element={<NewUser />} />
          <Route path='/sessoes/cadastros/editar/:id' element={<ModalEdit />} />
          <Route path='/sessoes/sessao/:id' element={<Session />} />  
        </Route>
        <Route path='/sessoes/painel' element={<Painel /> } />
        {/* <Route path='/dashboard' element={<Private> <Dashboard  /></Private>} /> */}

      </Routes>

    </AuthProvider>

  )
}

export default App
