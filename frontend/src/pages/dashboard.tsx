import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/user-context'
import UpdateUserForm from "../components/user-form/update-user"
import AddUserForm from "../components/user-form/add-user"
import AddRoleForm from "../components/role-form/add-role"
import {Sidebar} from "../layouts"
import {Routes, Route} from 'react-router-dom'

import axios from 'axios'

const Dashboard = () => {
  const {users, setUsers} = useContext(UserContext)
  useEffect(() => {
    axios.get('api/system/users')
    .then(res => {
      console.log(res)
      setUsers(res.data)
    })
    .catch(err => {
      console.log("Error Fetching Users "+ err)
    })
  }, [])

  return (
      <div className="flex w-screen h-screen">
        <Sidebar />
        <Routes>
            <Route path="/users" element={<AddUserForm />}/>
            <Route path="/role" element={<AddRoleForm />}/>
        </Routes>
      </div>
    )
}

/**
 *
        <AddUserForm />
        {users.map(user => (
          <div key={user.username}>
            <h4>{user.userName}</h4>
            <small>{user.password}</small>
            <UpdateUserForm user={user}/>
          </div>
        ))}
        <h2>Roles</h2>
        <AddRoleForm />

        */
export default Dashboard
