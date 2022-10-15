import {useState, useContext, useEffect} from 'react'
import {RoleContext} from '../../context/role-context'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddRoleForm = () => {
  const {roles, setRoles, permissions, setPermissions } = useContext(RoleContext)
  const [rolePermission, setRolePermission] = useState([])

  // useEffect(() => {
  //   axios.get('api/system/permissions')
  //   .then(res => {
  //     console.log(res.data)
  //     setPermissions(res.data)
  //   })
  //   .catch(err => {
  //     console.log("Error while fetching permissions ", err)
  //   })
  // }, [])

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
      console.log("Error while Saving Role "+ err)
    })
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-[#C8D9EA] dark:bg-[#1d3557] max-w-sm m-4">
<form onSubmit={handleSubmit(handleAddRole)}>
<div className="form-group mb-6">
<label htmlFor="key" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Key</label>
<input {...register("key")} type="text" className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border[#457b9d] focus:outline-none" id="key"
    aria-describedby="username" placeholder="Enter Key" />
{/* <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
    else.</small> */}
</div>
<div className="form-group mb-6">
<label htmlFor="roleName" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Role Name</label>
<input {...register("roleName")} type="text" className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-[#457b9d] focus:outline-none" id="roleName"
    placeholder="Enter role name" />
</div>
<div className="form-group mb-6">
<label htmlFor="permissions" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Permissions</label>
<select {...register("permissions")} multiple>
  {permissions.map(permission => (
    <option key={permission} value={permission} className="p-2">{permission}</option>
  ))}
</select>
</div>
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

export default AddRoleForm


{/* <form onSubmit={handleSubmit(handleAddRole)}>
      key : <input {...register("key")} type="text" />
      roleName : <input {...register("roleName")} type="text" />
      permissions : 
        <select {...register("permissions")} multiple>
        {permissions.map(permission => (
          <option key={permission} value={permission}>{permission}</option>
        ))}
        </select>
    </form> */}