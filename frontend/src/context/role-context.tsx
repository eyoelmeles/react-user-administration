import { useState, createContext} from 'react'
import { v4 as uuidv4 } from 'uuid';

const RoleContext = createContext(undefined)

const RoleProvider = ( {children} ) => {
    const [permissions, setPermissions] = useState(["perm-4", "perm-5", "perm-6", "perm-7"])
    const [roles, setRoles] = useState([
      {
        id: uuidv4(),
        key: "value",
        roleName: "name",
        permission: [
          "perm-1",
          "perm-2",
          "perm-3",
        ],
      },
      {
        id: uuidv4(),
        key: "value-2",
        roleName: "name-2",
        permission: [
          "perm-1",
          "perm-2",
          "perm-3",
        ],
      },
      {
        id: uuidv4(),
        key: "value-3",
        roleName: "name-3",
        permission: [
          "perm-1",
          "perm-2",
          "perm-3",
        ],
      },
  ])

  return (
    <RoleContext.Provider value={{ roles, setRoles, permissions }}>
      {children}
    </RoleContext.Provider>
  )
}

export {RoleContext, RoleProvider}
