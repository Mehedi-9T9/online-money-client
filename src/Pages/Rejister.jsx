import React from 'react';
import { Link } from 'react-router-dom';

const Rejister = () => {
    const handleRejister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const pin = form.pin.value
        const role = form.role.value

        console.log(name, email, phone, pin, role);

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content ">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRejister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Namel</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="Number" name='phone' placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pin</span>
                            </label>
                            <input type="Number" name='pin' placeholder="Pin" className="input input-bordered" required />
                        </div>
                        <select name='role' className="select select-info w-full max-w-xs">
                            <option disabled selected>Select language</option>
                            <option>user</option>
                            <option>agent</option>

                        </select>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Rejister</button>
                        </div>
                    </form>
                    <p className='text-lg font-medium text-black ml-8 py-3'>Have an Account <span className='text-blue-500'><Link to="/login">Go Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Rejister;