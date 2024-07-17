import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const TransactionManage = () => {
    const axiosSecure = useAxiosSecure()
    const [requst, setRequest] = useState()
    // console.log(requst);
    useEffect(() => {
        axiosSecure.get("/cashinRequest")
            .then(res => setRequest(res.data))

    }, [])
    return (
        <div className='p-10 grid grid-cols-3 gap-10'>
            {
                requst?.map((item, idx) => <div key={idx} className="bg-red-200 w-fit border border-yellow-400 p-6">
                    <h2>User Number:{item?.myinfo} </h2>
                    <p className="mb-3">Price:{item?.money} </p>
                    <button className="btn">Accept</button>
                    <button className="btn ml-10">Reject</button>
                </div>)
            }

        </div>
    );
};

export default TransactionManage;