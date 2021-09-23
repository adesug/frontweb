import React from 'react'
import { Link } from 'react-router-dom'
import './input.css'

export default function signIn() {
    return (
        <div className="w-full flex flex-wrap fixed ">
            <div className="w-1/2 shadow-2xl text-left flex justify-center">
                <p className="h-screen hidden md:block  absolute text-6xl lg:mt-48 md:mt-32 -ml-20 text-white font-bold">Plugin</p>
                <p className="h-screen hidden md:block absolute text-2xl lg:mt-72 md:mt-48 text-white font-semibold ">
                    Plugin is a linux <br />
                    organization located in <br/>
                    Tegal
                </p>
            

                <img className="object-cover w-full h-screen hidden md:block" src="https://res.cloudinary.com/desug/image/upload/v1630960002/login_fea4xn.jpg" alt="gambar signin" />
            </div>

            <div className="md:w-1/2 flex flex-col justify-center">
            <img className="object-cover w-12/12 md:w-full h-screen block lg:hidden md:hidden" src="https://res.cloudinary.com/desug/image/upload/v1630960002/login_fea4xn.jpg" alt="gambar signin" />
                <div className="flex flex-col md:justify-start my-auto pt-8 md:pt-0 px-7 md:px-10 lg:px-32  absolute  ">

                    <p className="text-3xl mr-auto text-blue-400 font-semibold">
                        Login
                    </p>
                    <p className="text-sm mt-6 mr-auto hidden md:block  text-gray-400">Please login to continue in our website</p>
                    <p className="text-sm mt-6 mr-auto  text-white lg:hidden md:hidden block">Please login to continue in our website</p>

                    <form className="flex flex-col pt-3 md:pt-8 ">
                        <div className="relative h-10 input-component empty lg:ml-14 md:ml-0 ml-12 mb-8">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="email" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold"> Email</p>
                            </label>
                        </div>
                        
                        <div className="relative h-8 input-component empty lg:ml-14 md:ml-0 ml-12 ">
                            <input
                                id="password"
                                type="text"
                                name="password"
                                className="h-5/6 w-full rounded-full px-3 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="password" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold"> Password</p>
                            </label>
                        </div>


                        <input type="submit" value="Login" className="bg-blue-400 text-white font-bold text-lg hover:bg-blue-300 p-2 mt-9 rounded-full max-w-lg lg:ml-14 md:ml-0 ml-12" />

                    </form>


                    <Link to="/Registration">
                        <div className="text-center pt-5 pb-12 ml-16">
                            <p className="text-gray-400">Don't have an account?  </p>
                            <p className="underline font-semibold text-gray-500">Register here.</p>
                        </div>
                    </Link>
                </div>

            </div>



        </div>

    )
}
