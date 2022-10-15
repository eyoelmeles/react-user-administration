import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const UpdateUserForm = (user) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      userName: user.userName,
      fullName: user.fullName,
      email: user.email,
      phoneNo: user.phoneNo
    }
  });

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
        <div className="block p-6 rounded-lg shadow-lg bg-[#C8D9EA] dark:bg-[#1d3557] max-w-sm">
        <form onSubmit={handleSubmit(handleAddUser)}>
                <div className="form-group mb-6">
                <label htmlFor="username" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Username</label>
                <input {...register("userName")} type="text" className="form-control
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
                    focus:text-gray-700 focus:bg-white focus:border[#457b9d] focus:outline-none" id="userName"
                    aria-describedby="username" placeholder="Enter username" />
                {/* <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
                    else.</small> */}
                </div>
                <div className="form-group mb-6">
                <label htmlFor="fullName" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Full Name</label>
                <input {...register("fullName")} type="text" className="form-control block
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
                    focus:text-gray-700 focus:bg-white focus:border-[#457b9d] focus:outline-none" id="fullName"
                    placeholder="Enter your full name" />
                </div>
                <div className="form-group mb-6">
                <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Email</label>
                <input {...register("email")} type="email" className="form-control block
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
                    focus:text-gray-700 focus:bg-white focus:border-[#457b9d] focus:outline-none" id="email"
                    placeholder="email@example.com" />
                </div>
                <div className="form-group mb-6">
                <label htmlFor="phoneNo" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Phone Number</label>
                <input {...register("phoneNo")} type="text" className="form-control block
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
                    focus:text-gray-700 focus:bg-white focus:border-[#457b9d] focus:outline-none" id="phoneNo"
                    placeholder="phoneNo" />
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

export default UpdateUserForm
