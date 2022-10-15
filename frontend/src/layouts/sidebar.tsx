import { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiMenuAlt3} from 'react-icons/hi'
import {MdSpaceDashboard} from 'react-icons/md'
import {BsFillPersonFill, BsFillInboxesFill } from 'react-icons/bs';

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const tabs = [
        {
            name: 'Dashboard',
            icon: <MdSpaceDashboard size={26} className='flex-none' />,
            route: '/',
        },
        {
            name: 'Users',
            icon: <BsFillPersonFill size={26} className='flex-none' />,
            route: '/users',
        },
        {
            name: 'Roles',
            icon: <BsFillInboxesFill size={26} className='flex-none' />,
            route: '/role',
        },
        

    ]
    return (
        <div className={`bg-[#1d3557] min-h-screen ${open ? 'w-72': 'w-16'} duration-300 dark:text-gray-100 px-4`}>
            <div className={`py-3 flex justify-end text-sm ${!open && 'justify-center'}`}>
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
            </div>
            <div>
                {tabs.map(tab => (
                <Link key={tab.name} to={tab.route}>
                <div className={`flex items-center gap-3.5 my-6 p-2 dark:hover:bg-gray-800 rounded-md ${!open && 'justify-center'}`}>
                    {tab.icon}
                    <h2 className={`whitespace-pre duration-500 ${!open && 'hidden opacity-0'}`}>{tab.name}</h2>
                </div>
            </Link>    
                ))}
            </div>
            
        </div>
    )
}

export default Sidebar
