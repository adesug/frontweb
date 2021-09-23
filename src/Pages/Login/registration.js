import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="w-full flex flex-wrap fixed">   

            <div className=" md:w-1/2 flex flex-col justify-center">
            <img className="object-cover w-full h-screen block lg:hidden md:hidden  " src="https://res.cloudinary.com/desug/image/upload/v1630961948/Plugin/mario-gogh-VBLHICVh-lI-unsplash_y3lwun.jpg" alt="gambar register"/>

                <div className="flex flex-col md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 absolute mt-16">
                    <p className="text-3xl mr-auto text-blue-400 font-semibold">Registration</p>
                    <p className="text-sm mt-6 mr-auto text-gray-400">Please login to continue in our website</p>

                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className="relative h-10 input-component empty ml-12 mb-8">
                            <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500 "
                            />
                            <label htmlFor="email" className="absolute left-16  bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold "> First Name</p>
                            </label>
                        </div>

                        
                        

                        <div className="relative h-10 input-component empty ml-12 mb-8">
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="email" className="absolute left-16  bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold"> Last Name</p>
                            </label>
                        </div>

                        <div className="relative h-10 input-component empty ml-12 mb-8">
                            <input
                                id="phone"
                                type="Number"
                                name="phone"
                                className="h-5/6 w-full rounded-full px-32 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="email" className="absolute left-16 bottom-4  transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Phone Number</p>
                            </label>
                        </div>
                       
                        <div className="relative h-10 input-component empty ml-12  mb-8">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="password" className="absolute left-16 bottom-4  transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Password</p>
                            </label>
                        </div>
        
                        <input type="submit" value="Register" className="ml-12 bg-blue-400 text-white font-bold text-lg hover:bg-blue-300 p-2 mr-2 mt-3  max-w-lg rounded-full"/>
                    </form>
                    <Link to="/">
                    <div className="text-center pl-16 pt-10 pb-12">
                
                        <p className="text-gray-400">You have an account? </p>
                        <p className="underline font-semibold text-gray-500">Login Here.</p>
                    
                    </div>
                    </Link>
                </div>

            </div> 
            <div className="w-1/2 shadow-2xl text-left">
                <p className="h-screen hidden md:block  absolute text-6xl mt-48 ml-64 text-white font-bold">Plugin</p>
                <p className="h-screen hidden md:block absolute text-2xl mt-96 ml-64 text-white font-semibold ">
                    
                    Plugin is a linux <br />
                    organization located in <br/>
                    Tegal
                </p>
                <img className="object-cover w-full h-screen hidden md:block" src="https://res.cloudinary.com/desug/image/upload/v1630961948/Plugin/mario-gogh-VBLHICVh-lI-unsplash_y3lwun.jpg" alt="gambar register"/>
            </div>
        </div>

    )
}
