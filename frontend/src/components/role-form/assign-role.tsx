import {useState, useContext } from 'react'
import {RoleContext} from '../../context/role-context'
import {UserContext} from '../../context/user-context'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AssignRoleForm = (user) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [selectedRole, setSelectedRole] = useState()
  const { roles } = useContext(RoleContext)

  function handleAssignRole(data) {
    console.log(data)
    axios.post('api/system/assign-role', data.permissions)
    .then(res => {

    })
    .catch(err => {
      console.log("Error assigning-role ", err)
    })
  }

  return (
    <div>
        <h1>Assign Roles for {user.fullName} </h1>
        <h3>List of Roles </h3>
        <form  onSubmit={handleSubmit(handleAssignRole)}>
          <select {...register("permissions")} multiple>
          {roles.map(role => (
            <option key={role.key} value={role.id}>
              {role.roleName}
            </option>
              ))}
          </select>
            <button type="submit" className="
                px-6
                py-2.5
                bg-[#37AFE2]
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-[#457b9d] hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Submit</button>
        </form>
      </div>
    )
}

export default AssignRoleForm
