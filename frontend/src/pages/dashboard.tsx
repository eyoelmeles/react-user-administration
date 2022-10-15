import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/user-context'
import {Sidebar} from "../layouts"
import {Routes, Route} from 'react-router-dom'

import axios from 'axios'
import Users from './user'
import Role from './role'

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
            <Route path="/users" element={<Users />}/>
            <Route path="/role" element={<Role />}/>
        </Routes>
      </div>
    )
}

export default Dashboard
