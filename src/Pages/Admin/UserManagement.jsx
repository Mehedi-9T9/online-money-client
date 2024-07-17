import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UserManagement = () => {
    const axiosSecure = useAxiosSecure()
    const [users, setUsers] = useState()
    // const [searchUser, setSearchUser] = useState()
    const [toggle, setToggle] = useState(true)
    // console.log(requst);
    useEffect(() => {
        axiosSecure.get("/allusers")
            .then(res => setUsers(res.data))

    }, [axiosSecure, toggle])
    const handleActive = (phone) => {
        axiosSecure.patch(`/statuschange/${phone}`)
            .then(res => {
                console.log(res.data)
                setToggle(!toggle)
            })
    }
    const handleBlock = (phone) => {
        axiosSecure.patch(`/statusblock/${phone}`)
            .then(res => {
                console.log(res.data)
                setToggle(!toggle)
            })
    }
    const handleSearch = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        console.log(name);

        axiosSecure.get(`/search/${name}`)
            .then(res => {
                console.log()
                setUsers(res.data)

            })
    }
    return (
        <div className='p-10'>
            <form onSubmit={handleSearch} className='flex gap-x-5 bg-red-200 py-4 px-5 rounded w-fit'>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" name='name' className="grow" placeholder="Username" />
                </label>
                <button className='btn'>Search</button>
            </form>


            <div className=' grid grid-cols-3 gap-10 mt-5'>
                {
                    users?.map((user, idx) =>
                        <div key={idx} className='bg-red-200 p-6 w-fit rounded'>
                            <h2>Name:{user?.name} </h2>
                            <h3>Number: {user?.phone}</h3>
                            <h4>Role:{user?.role}</h4>
                            <h4 className='mb-3'>Status:{user?.status}</h4>
                            <div className={`${user?.role == "admin" ? "hidden" : null}`}>
                                {
                                    user?.status == "pending" ? <button onClick={() => handleActive(user?.phone)} className='btn w-full'>Active</button> : <button onClick={() => handleBlock(user?.phone)} className='btn w-full'>Block</button>
                                }
                            </div>




                        </div>
                    )
                }

            </div>

        </div>

    );
};

export default UserManagement;