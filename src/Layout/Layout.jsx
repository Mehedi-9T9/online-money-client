import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Layout = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [userinfo, setUserInfo] = useState()
    useEffect(() => {
        const emailorNumber = localStorage.getItem("emailorNumber")
        console.log(emailorNumber);

        axiosSecure.get(`/overview/${emailorNumber}`)
            .then(res => {

                setUserInfo(res.data)
            })
    }, [axiosSecure])

    const userCategory = [
        {
            title: "Overview",
            path: "/"
        },
        {
            title: "Balance",
            path: "/balance"
        },
        {
            title: "Send Money",
            path: "/sendmoney"
        },
        {
            title: "Cash Out",
            path: "/cashout"
        },
        {
            title: "Cash In",
            path: "/cashin"
        },
        {
            title: "Transiction",
            path: "/transiction"
        },
    ]
    const agentCategory = [
        {
            title: "Overview",
            path: "/"
        },
        {
            title: "Balance  Inquiry",
            path: "/balance"
        },
        {
            title: "Transaction Manage:",
            path: "/transaction"
        },

        {
            title: "Transactions Histor",
            path: "/history"
        }
    ]
    const adminCategory = [
        {
            title: "User Management:",
            path: "/usermanagement"
        },
        {
            title: "System Monitoring:",
            path: "/alltransaction"
        },
    ]
    const handleLogout = () => {
        localStorage.removeItem("emailorNumber")
        navigate("/login")
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <header>
                <div className='flex bg-red-200 text-white font-bold justify-between px-20 items-center py-3'>
                    <h2>Online-Money</h2>
                    <button onClick={handleLogout} className='btn'>Log Out</button>
                </div>
            </header>

            <section className='flex'>
                <aside className='bg-red-200 w-[20%] list-none  pl-10 space-y-3 h-screen'>

                    <div className={`${userinfo?.role == "user" ? "block" : "hidden"}`} >
                        {
                            userCategory.map((user, idx) => <li key={idx} className={`${location.pathname == user.path ? "font-bold text-xl" : null}`}><Link to={user.path}>{user.title}</Link></li>)
                        }


                    </div>
                    <div className={`${userinfo?.role == "agent" ? "block" : "hidden"}`} >
                        {
                            agentCategory.map((user, idx) => <li key={idx} className={`${location?.pathname == user?.path ? "font-bold text-xl" : null}`}><Link to={user.path}>{user.title}</Link></li>)
                        }


                    </div>
                    <div className={`${userinfo?.role == "admin" ? "block" : "hidden"}`} >
                        {
                            adminCategory?.map((user, idx) => <li key={idx} className={`${location?.pathname == user?.path ? "font-bold text-xl" : null}`}><Link to={user.path}>{user.title}</Link></li>)
                        }


                    </div>
                </aside>
                <main className='w-[80%] bg-white p-10'>
                    <Outlet></Outlet>
                </main>
            </section>

        </div>
    );
};

export default Layout;