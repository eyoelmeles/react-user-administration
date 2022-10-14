import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const UpdateUserForm = (user) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function handleAddUser(data) {
    console.log(data)
    const userData = {
      userInfo: {
        id: user.id,
        userName: data.userName,
        fullName: data.fullName,
        email: data.email,
        phoneNo: data.phoneNo,
      },
    }
    console.log(userData)
    axios.put("api/system/user", userData)
  }
  return (
    <form onSubmit={handleSubmit(handleAddUser)}>
      username : <input {...register("userName")} type="text" />
      fullname : <input {...register("fullName")} type="text" />
      email : <input {...register("email")} type="email" />
      phone number : <input {...register("phoneNo")} type="text" />
    </form>
  )
}

export default UpdateUserForm
