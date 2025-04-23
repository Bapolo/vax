import React, { useState, Suspense } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Loader = React.lazy(() => import("./componentes/Loader"))

function App() {
  const [logado,setLogado] = useState(false)

  return (
    <HashRouter>
      <Suspense fallback = {<Loader />}>
        <Routes>
          <Route path = "/" element = {logado ? <Home /> : <Navigate to="/login" />} />
          <Route path = "/login" element = {<Login />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
