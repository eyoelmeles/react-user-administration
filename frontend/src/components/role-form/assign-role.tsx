import {useState, useContext } from 'react'
import {RoleContext} from '../../context/role-context'
import {UserContext} from '../../context/user-context'

const AssignRoleForm = () => {
  const { roles } = useContext(RoleContext)
  const { users } = useContext(UserContext)
  return (
    <div>
        <h1>Assign Roles </h1>
        <h3>List of Roles </h3>
        {roles.map(role => (
          <div key={role.key}>
              <p>{role.roleName}</p>
          </div>
            ))}
        <h3>Select a user</h3>
        {users.map(user => (
          <div key={user.userName}>
              <p>{user.userName}</p>
          </div>
            ))}
      </div>
    )
}

export default AssignRoleForm
