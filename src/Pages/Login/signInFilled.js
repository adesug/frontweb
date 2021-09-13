import React from 'react'
import { Link } from 'react-router-dom'


export default function signInFilled() {
    return (
        <div className="w-full flex flex-wrap fixed">
        <div className="w-1/2 shadow-2xl text-left ">
            <p className="h-screen hidden md:block  absolute text-6xl mt-48 ml-72 text-white font-bold">Plugin</p>
            <p className="h-screen hidden md:block absolute text-2xl mt-96 ml-64 text-white font-semibold ">

                Plugin is a linux <br />
                organization located in <br/>
                Tegal
            </p>
        

            <img className="object-cover w-full h-screen hidden md:block" src="https://res.cloudinary.com/desug/image/upload/v1630960002/login_fea4xn.jpg" alt="gambar signin" />
        </div>

        <div className=" md:w-1/2 flex flex-col  ">
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 ml-6">

                <p className="text-3xl mr-auto text-blue-400 font-semibold">
                    Login
                </p>
                <p className="text-sm mt-6 mr-auto  text-gray-400">Please login to continue in our website</p>

                <form className="flex flex-col pt-3 md:pt-8">
                    <div className="relative h-10 input-component empty ml-14 mb-8">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="h-14 w-full rounded-full px-3 py-6 transition-all border-gray-500"
                        />
                        <label htmlFor="email" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                            <p className="text-gray-400 font-bold"> Email</p>
                        </label>
                    </div>
                    
                    <div className="relative h-10 input-component empty ml-14">
                        <input
                            id="password"
                            type="text"
                            name="password"
                            className="h-14 w-full rounded-full px-3 py-6 transition-all border-gray-500"
                        />
                        <label htmlFor="password" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                            <p className="text-gray-400 font-bold"> Password</p>
                        </label>
                    </div>


                    <input type="submit" value="Login" className="bg-blue-400 text-white font-bold text-lg hover:bg-blue-300 p-3 mt-9 rounded-full max-w-lg ml-14" />

                </form>


                <Link to="/Registration">
                    <div className="text-center pt-12 pb-12">

                        <p className="text-gray-400">Don't have an account?  </p>
                        <p className="underline font-semibold text-gray-500">Register here.</p>
                    </div>
                </Link>
            </div>

        </div>



    </div>

    )
}
