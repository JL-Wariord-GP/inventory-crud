import './assets/main.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './app/components/ProtectedRoutes'
import Login from './app/Pages/Login'
import Home from './app/Pages/Home'
import Dashboard from './app/Pages/Dashboard'
import Admin from './app/Pages/Admin'
import Users from './app/Pages/Users'
import Inventory from './app/Pages/Inventory'

function App() {

  return (
    <HashRouter>

      <Routes>

        <Route path='/' element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/users' element={<Users />} />
          <Route path='/inventory' element={<Inventory />} />
        </Route>

      </Routes>

    </HashRouter>

  )
}

export default App
