import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        const emailorPhone = e.target.emailorPhone.value
        const pin = e.target.pin.value
        console.log(emailorPhone, pin);
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

export default login;