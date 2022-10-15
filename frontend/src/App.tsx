import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import {UserProvider} from './context/user-context'
import {RoleProvider} from './context/role-context'
import AssignRoleForm from './components/role-form/assign-role'

function App() {

  return (
    <BrowserRouter>
      <div className="w-screen h-screen">
        <UserProvider>
          <RoleProvider>
            <Routes>
              <Route path="/*" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/role" element={<AssignRoleForm />} />
            </Routes>
          </RoleProvider>
        </UserProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
