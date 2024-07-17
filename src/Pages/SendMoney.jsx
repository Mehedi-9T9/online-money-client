import useAxiosSecure from "../Hooks/useAxiosSecure";


const SendMoney = () => {
    const axiosSecure = useAxiosSecure()
    const handleSendmoney = (e) => {
        e.preventDefault()
        const recipient = e.target.recipient.value
        const money = e.target.money.value
        const pin = e.target.pin.value
        const myinfo = localStorage.getItem("emailorNumber")
        const sendmoneyInfo = { recipient, money, pin, myinfo }
        console.log(sendmoneyInfo);
        axiosSecure.post('/sendmoney', sendmoneyInfo)
            .then(res => {
                console.log(res.data);
            })

    }
    return (
        <div className='p-10 '>



            <div className="card bg-red-200  max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-medium text-center pt-10'>Send Money</h2>
                <form onSubmit={handleSendmoney} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipient's Number</span>
                        </label>
                        <input type="number" name='recipient' placeholder="Type Number" className="input input-bordered" required />
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

export default SendMoney;