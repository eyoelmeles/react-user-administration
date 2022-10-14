import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../context/user-context'
import UpdateUserForm from "../components/user-form/update-user"
import AddUserForm from "../components/user-form/add-user"
import AddRoleForm from "../components/role-form/add-role"
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
      <div>
        <h2>Dashboard</h2>
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
      </div>
    )
}
export default Dashboard
