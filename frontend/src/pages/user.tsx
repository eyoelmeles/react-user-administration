import React, {useState, useEffect, useContext } from 'react'
import {BsFillPersonPlusFill, BsSearch } from 'react-icons/bs'
import UserCard from '../components/user/user-card'
import AddUserForm from "../components/user-form/add-user"
import UpdateUserForm from "../components/user-form/update-user"
import { UserContext } from '../context/user-context';
import { Content, Infobar } from '../layouts';
import axios from 'axios'

const Users = () => {
    const [addUser, setAddUser] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [user, setUser] = useState({})
    const { users } = useContext(UserContext)
    useEffect(() => {
        axios.get('api/system/users')
        .then(res => {
            console.log(res)
            setUser(res.data)
        })
        .catch(err => {
            console.log("Error while fetching users ", err)
        })
    }, [])

      function handleAddUser() {
        // get the data
        // sanitize it
        // post it to the database
        setAddUser(!addUser)
      }

      function handleUpdateUser(userId) {
        // get the data
        // sanitize it
        // post it to the database
        setAddUser(false)
        setUser(users.filter(user => user.id === userId)[0])
        setEditUser(true)
      }

      function handleUser(id: number) {
        const user = users.filter(user => user.id == id)[0]
        setUser(user)
        setAddUser(false)
      }


    return (
        <div className='flex bg-[url("/doodle.jpg")] w-full h-full'>
            <Content>
                <div className="flex flex-col h-full w-full justify-start items-center border-r-2 border-gray-600">
                    <div className="flex bg-[#1d3557] flex-none w-full h-20 justify-end items-center px-6">
                        <div className="flex gap-4">
                            
                            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-sm gap-4">
                                <BsSearch size={22} />
                                <input type="text" name="search" id="search" className='bg-transparent' placeholder="search user" />
                            </div>
                            <button className="bg-[#37AFE2] rounded-md text-white py-2 px-4 flex gap-3 items-center justify-center" onClick={handleAddUser}><BsFillPersonPlusFill size={26} /> Add User</button>
                        </div>
                    </div>
                    {users.map(user => (
                        <div className="flex flex-col justify-center w-full p-2 overflow-y-auto">
                            <UserCard key={user.id} name={user.fullName || "Eyoel Meles"} email={user.email || "tojoelmeles@gmail.com"} image={user.image || "https://avatars.githubusercontent.com/u/106088179?s=400&u=08ae898ec6940ef2d4c7a30911153081b34340a3&v=4"} handleUser={() => handleUpdateUser(user.id) } />
                        </div>
                    ))}
                </div>

            </Content>
            
            {addUser ? (<AddUserForm />) :(users.length !== 0 && (
                <Infobar title="Edit">
                    <div className="flex justify-evenly p-4">
                        {editUser && <UpdateUserForm user={user} /> }
                        {/* <EditUserRole /> */}
                    </div>
                </Infobar>)
            )}
        </div>
    )
}

export default Users