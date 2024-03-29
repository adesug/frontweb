import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './input.css'

export default function SignIn() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    return (
        <div className="w-full flex flex-wrap fixed ">
            <div className="w-1/2 shadow-2xl text-left flex justify-center">
                <p className="h-screen hidden md:block  absolute text-6xl lg:mt-48 md:mt-32 -ml-20 text-white font-bold">Plugin</p>
                <p className="h-screen hidden md:block absolute text-2xl lg:mt-72 md:mt-48 text-white font-semibold ">
                    Plugin is a linux <br />
                    organization located in <br/>
                    Tegal
                </p>
            

                <img className="object-cover w-full h-screen hidden md:block" src="https://res.cloudinary.com/desug/image/upload/v1632495038/Plugin/photo1632494998_whbdpz.jpg" alt="gambar signin" />
            </div>

            <div className="md:w-1/2 flex flex-col justify-center ">
                
            <img className="object-cover w-screen h-screen block lg:hidden md:hidden" src="https://res.cloudinary.com/desug/image/upload/v1632495038/Plugin/photo1632494998_whbdpz.jpg" alt="gambar signin" />
                <div className="flex flex-col md:justify-start my-auto pt-8 md:pt-0 px-7 md:px-10 lg:px-32 absolute">

                    <p className="text-3xl mr-auto text-blue-400 font-semibold">
                        Login
                    </p>
                    <p className="text-sm mt-6 mr-auto hidden md:block  text-gray-400">Please login to continue in our website</p>

                    <form className="flex flex-col pt-3 md:pt-8 ">
                        <div className= {
                            "relative h-10 input-component   lg:ml-14 md:ml-0  mb-8 " +
                            (email.length > 0 ? "" : "empty")
                            }
                            >
                            <input
                                id="email"
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 transition-all border-gray-500 pl-5"
                                value={email}
                              
                            />
                            <label htmlFor="email" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold "> Email</p>
                            </label>
                        </div>
                        
                        <div className={
                            "relative h-10 input-component lg:ml-14 md:ml-0 " +
                             (password.length > 0 ? "" : "empty")
                            }
                            >
                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-5/6 w-full rounded-full  py-6 mr-24 transition-all border-gray-500 pl-5"
                                value={password}
                            />
                            <label htmlFor="password" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Password</p>
                            </label>
                        </div>
                      
                      <button className="bg-blue-400 text-white text-lg font-bold rounded-full p-2 max-w-lg mt-7 lg:ml-14 md:ml-0"><Link to="/EventRegistration">Login</Link></button>
                    </form>


                 
                        <div className="pt-5 pb-12pl-11">
                            <p className="text-gray-400">Don't have an account?</p>
                            <Link to="/Registration">
                            <p className="underline font-semibold text-gray-500">Register here.</p>
                            </Link>
                        </div>
                    
                </div>

            </div>



        </div>

    )
}
