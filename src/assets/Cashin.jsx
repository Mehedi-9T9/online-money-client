import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Cashin = () => {
    const axiosSecure = useAxiosSecure()
    const handleCashin = (e) => {
        e.preventDefault()
        const agent = e.target.agent.value
        const money = e.target.money.value
        const myinfo = localStorage.getItem("emailorNumber")
        const cashinInfo = { agent, money, myinfo }

        axiosSecure.post('/cashin', cashinInfo)
            .then(res => {
                console.log(res.data);
            })

    }
    return (
        <div className='p-10 '>



            <div className="card bg-red-200  max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-medium text-center pt-10'>Cash In</h2>
                <form onSubmit={handleCashin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Agent Number</span>
                        </label>
                        <input type="number" name='agent' placeholder="give me agent number" className="input input-bordered" required />
                    </div>

                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Agent Number</span>
                        </label>
                        <input type="number" name='agent' placeholder="give me agent number" className="input input-bordered" required />
                    </div> */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Money</span>
                        </label>
                        <input type="number" name='money' placeholder="50" className="input input-bordered" required />

                    </div>

                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pin</span>
                        </label>
                        <input type="number" name='pin' placeholder="Type Your Pin" className="input input-bordered" required />

                    </div> */}


                    <div className="form-control mt-6">
                        <button className="btn bg-gray-400">Cash In Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cashin;