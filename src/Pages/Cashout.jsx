
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Cashout = () => {

    const axiosSecure = useAxiosSecure()
    const handleCashout = (e) => {
        e.preventDefault()
        const agent = e.target.agent.value
        const money = e.target.money.value
        const pin = e.target.pin.value
        const myinfo = localStorage.getItem("emailorNumber")
        const cashoutInfo = { agent, money, pin, myinfo }
        console.log(cashoutInfo);
        axiosSecure.post('/cashout', cashoutInfo)
            .then(res => {
                console.log(res.data);
            })

    }
    return (
        <div className='p-10 '>



            <div className="card bg-red-200  max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-medium text-center pt-10'>Send Money</h2>
                <form onSubmit={handleCashout} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Agent Number</span>
                        </label>
                        <input type="number" name='agent' placeholder="give me agent number" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Money</span>
                        </label>
                        <input type="number" name='money' placeholder="50" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pin</span>
                        </label>
                        <input type="number" name='pin' placeholder="Type Your Pin" className="input input-bordered" required />

                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-gray-400">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Cashout;