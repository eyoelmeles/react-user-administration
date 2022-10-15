import {useState, createContext} from 'react'
import { v4 as uuidv4 } from 'uuid';

interface User {
  id: string;
  userName: string;
  fullName: string;
  email: string;
  phoneNo: string;
  roles: string[];
}

interface SystemUser {
  userName: string;
  password: string;
}

const UserContext = createContext(undefined)

const UserProvider = ( {children} ) => {
  const [users, setUsers] = useState([
      {
        userName: "eyoel",
        password: "meles",
      },
      {
        userName: "abreham",
        password: "meles",
      },
  ])
  const [systemUser, setSystemUser] = useState(null)

  function createSystemUser(user: SystemUser) {
    setSystemUser({userName: user.userName, password: user.password})
  }
  
  return (
    <UserContext.Provider value={{ systemUser, users, setUsers, createSystemUser }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}

