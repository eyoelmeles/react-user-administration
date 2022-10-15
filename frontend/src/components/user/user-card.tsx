import React from 'react'

interface UserCard {
    name: string;
    email: string;
    image: string;
    handleUser: () => void;
}

const UserCard: React.FC<UserCard> =({name, email, image, handleUser}) => {
    return (
        <div className="dark:bg-[#1d3557] p-10 text-black rounded-md flex gap-2 m-2 justify-start dark:text-gray-200 cursor-pointer" onClick={handleUser}>
            <img src={image || "https://avatars.githubusercontent.com/u/100200?v=4"} alt="user" className="h-16 rounded-full" />
            <div>
                <h2>{name || "Ryan Florence" }</h2>
                <p>{email || "ryanflorence@gmail.com" }</p>
                <p>seen within a week</p>
            </div>
        </div>
    )
}

export default UserCard