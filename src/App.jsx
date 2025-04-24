import React, { useState, Suspense, useContext } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ContextLogin } from './componentes/ContextLogin'

const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Loader = React.lazy(() => import("./componentes/Loader"))
const Cadastrar = React.lazy(() => import("./pages/Cadastrar"))

function App() {
  const { logado } = useContext(ContextLogin)

  return (
    <HashRouter>
      <Suspense fallback = {<Loader />}>
        <Routes>
          <Route path = "/" element = {logado ? <Home /> : <Navigate to="/login" />} />
          <Route path = "/login" element = { logado ? <Home /> : <Login /> } />
          <Route path = "/cadastrar" element = { logado ? <Home /> : <Cadastrar /> } />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
