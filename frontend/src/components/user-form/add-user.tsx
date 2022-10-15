import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {BsSearch, BsFillPersonPlusFill  } from 'react-icons/bs'
import {Content} from "../../layouts"
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const AddUserForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function handleAddUser(data) {
    console.log(data)
    const userData = {
      userInfo: {
        id: uuidv4(),
        userName: data.userName,
        fullName: data.fullName,
        email: data.email,
        phoneNo: data.phoneNo,
      },
      password: data.password,
    }
    console.log(userData)
    axios.post("api/system/user", userData)
  }
  return (
      <div className=" w-full h-screen bg-[url('/public/doodle.jpg')] justify-center items-center">
      <div className="flex bg-[#1d3557] flex-none w-full h-20 justify-end items-center px-6">
        <div className="flex gap-4">
            
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-sm gap-4">
                <BsSearch size={22} />
                <input type="text" name="search" id="search" className='bg-transparent' placeholder="search user" />
            </div>
            <button className="bg-[#37AFE2] rounded-md text-white py-2 px-4 flex gap-3 items-center justify-center" onClick={handleAddUser}><BsFillPersonPlusFill size={26} /> Add User</button>
        </div>
        </div>
        <Content>
          <form onSubmit={handleSubmit(handleAddUser)}>
            username : <input {...register("userName")} type="text" />
            fullname : <input {...register("fullName")} type="text" />
            email : <input {...register('email', { required: true })} className="form-control
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
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email" />
            phone number : <input {...register("phoneNo")} type="text" />
            password : <input {...register("password")} type="password" />
          </form>
        </Content>
      </div>
  )
}

export default AddUserForm
