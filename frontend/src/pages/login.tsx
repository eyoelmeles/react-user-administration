import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
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
      <div>
        <h3>Login as System User</h3>
        <form onSubmit={handleSubmit(loginHandler)}>
          username : <input {...register("userName")} type="text" placeholder="username"/>
          password : <input {...register("password")} type="password" placeholder="password"/>
          <input type="submit" />
        </form>
      </div>
    )
}
export default Login
