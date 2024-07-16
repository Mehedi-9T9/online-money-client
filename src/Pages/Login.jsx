import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';

const Login = () => {
    const navigate = useNavigate()
    const instance = UseAxiosPublic()
    const handleLogin = (e) => {
        e.preventDefault()
        const emailorPhone = e.target.emailorPhone.value
        const pin = e.target.pin.value
        console.log(emailorPhone, pin);
        const loginInfo = { emailorPhone, pin }
        instance.post("/login", loginInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.message == "success") {
                    navigate("/")
                    localStorage.setItem("emailorNumber", emailorPhone)

                }
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content ">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email/Phone</span>
                            </label>
                            <input type="text" name='emailorPhone' placeholder="Email/Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pin</span>
                            </label>
                            <input type="number" name='pin' placeholder="Pin" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-lg font-medium ml-10 py-3'>New User <span className='text-blue-500'><Link to="/rejister">Go Rejister</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;