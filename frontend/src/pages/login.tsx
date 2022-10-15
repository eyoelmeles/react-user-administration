import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import {Navigate} from "react-router-dom"
import {UserContext} from '../context/user-context'
import axios from 'axios'

interface loginData {
  userName: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { createSystemUser } = useContext(UserContext)
  function loginHandler(data: loginData) {
    // send it to server
    console.log(data)
    // Navigate({to: "dashboard"})
    axios.post('api/system/access-token', data)
    .then(res => {
      // save it to the localstorage
      localStorage.setItem('token', res.data.token)
      console.log(res)
      createSystemUser(data)
    })
    .catch(err => console.log("While Authentication " + err))
  }

  return (
<div className="flex justify-center items-center w-screen h-screen bg-[url('/doodle.jpg')]">
        <div className="block p-6 rounded-lg shadow-lg bg-[#C8D9EA] dark:bg-[#1d3557] max-w-sm">        <h3>Login as System User</h3>
        {/* <form onSubmit={handleSubmit(loginHandler)}>
          username : <input {...register("userName")} type="text" placeholder="username"/>
          password : <input {...register("password")} type="password" placeholder="password"/>
          <input type="submit" />
        </form> */}

        <form onSubmit={handleSubmit(loginHandler)}>
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
                    focus:text-gray-700 focus:bg-white focus:border[#457b9d] focus:outline-none" id="username"
                    aria-describedby="username" placeholder="Enter username" />
                {/* <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
                    else.</small> */}
                </div>
                <div className="form-group mb-6">
                <label htmlFor="password" className="form-label inline-block mb-2 text-gray-700 dark:text-gray-200">Password</label>
                <input {...register("password")} type="password" className="form-control block
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
                    focus:text-gray-700 focus:bg-white focus:border-[#457b9d] focus:outline-none" id="password"
                    placeholder="Password" />
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
      </div>
    )
}
export default Login