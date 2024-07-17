import { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Overview = () => {
    const axiosSecure = useAxiosSecure()
    const [userinfo, setUserInfo] = useState()
    console.log(userinfo);


    useEffect(() => {
        const emailorNumber = localStorage.getItem("emailorNumber")
        console.log(emailorNumber);

        axiosSecure.get(`/overview/${emailorNumber}`)
            .then(res => {

                setUserInfo(res.data)
            })
    }, [axiosSecure])

    if (userinfo?.status == "pending") {
        return (
            <div>
                <div>
                    <h2>Dear {userinfo?.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta?</p>
                </div>
            </div>
        )
    }
    return (

        <>
            <div>
                <h2>Name: {userinfo?.name}</h2>
                <h2>Email: {userinfo?.email}</h2>
                <h3>Phone: {userinfo?.phone}</h3>
            </div>

            <div className='bg-red-200 text-yellow-950 font-bold'>
                <h2>Your Money</h2>
                <p>1000</p>
            </div>
        </>
    );
};

export default Overview;