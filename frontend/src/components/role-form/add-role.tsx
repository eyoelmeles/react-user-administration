import {useContext} from 'react'
import {RoleContext} from '../../context/role-context'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddRoleForm = () => {
  const {roles, setRoles, permissions } = useContext(RoleContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function handleAddRole(data) {
    console.log(data)
    const userData = {
      key: data.key,
      roleName: data.roleName,
      permissions: data.permissions
    }
    console.log(userData)
    axios.post("api/system/role", userData)
    .then(res => {
      setRoles([...roles, res.data])
    })
    .catch(err => {
      console.log("Error whlile Saving Role "+ err)
    })
  }

  return (
    <form onSubmit={handleSubmit(handleAddRole)}>
      key : <input {...register("key")} type="text" />
      roleName : <input {...register("roleName")} type="text" />
      permissions : 
        <select {...register("permissions")}>
        {
          // This is not the right way make sure we can select multiple permissions for one role
        }
        {permissions.map(permission => (
          <option key={permission} value={permission}>{permission}</option>
        ))}
        </select>
    </form>
  )
}

export default AddRoleForm
