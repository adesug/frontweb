import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-full flex flex-wrap fixed">   

            <div className=" md:w-1/2 flex flex-col justify-center">
            <img className="object-cover w-screen h-screen block lg:hidden md:hidden  " src="https://res.cloudinary.com/desug/image/upload/v1630961948/Plugin/mario-gogh-VBLHICVh-lI-unsplash_y3lwun.jpg" alt="gambar register"/>

                <div className="flex flex-col md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 absolute mt-16">
                    <p className="text-3xl mr-auto text-blue-400 font-semibold">Registration</p>
                    <p className="text-sm mt-6 mr-auto text-gray-400">Please login to continue in our website</p>

                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className= {
                            "relative h-10 input-component lg:ml-14 md:ml-0 mb-8 " + 
                            (firstname.length > 0 ? "" : "empty")
                            }
                            >
                            <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                onChange={(e) => setFirstname(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-48 pl-5 transition-all border-gray-500 "
                                value={firstname}
                            />
                            <label htmlFor="email" className="absolute left-10  bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold "> First Name</p>
                            </label>
                        </div>

                        
                        

                        <div className={"relative h-10 input-component lg:ml-14 md:ml-0 mb-8 " + 
                        (lastname.length > 0 ? "" : "empty")
                        }
                        >
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                onChange={(e) => setLastname(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-48 pl-5 transition-all border-gray-500"
                                value={lastname}
                            />
                            <label htmlFor="email" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold"> Last Name</p>
                            </label>
                        </div>

                        <div className={"relative h-10 input-component lg:ml-14 md:ml-0 mb-8 " +
                        (phone.length > 0 ? "" : "empty")
                        }
                        >
                            <input
                                id="phone"
                                type="Number"
                                name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-48 pl-5 transition-all border-gray-500"
                                value={phone}
                            />
                            <label htmlFor="email" className="absolute left-10 bottom-4  transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Phone Number</p>
                            </label>
                        </div>
                       
                        <div className={"relative h-10 input-component lg:ml-14 md:ml-0 mb-8 " +
                        (password.length > 0 ? "" : "empty")
                        }>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-48 pl-5 transition-all border-gray-500"
                                value={password}
                            />
                            <label htmlFor="password" className="absolute left-10 bottom-4  transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Password</p>
                            </label>
                        </div>
        
                        <input type="submit" value="Register" className=" bg-blue-400 text-white font-bold text-lg hover:bg-blue-300 p-2 lg:ml-14 md:ml-0 mt-3  max-w-lg rounded-full"/>
                    </form>
                   
                    <div className="text-center pl-11 pt-10 pb-12">
                
                        <p className="text-gray-400">You have an account? </p>
                        <Link to="/">
                        <p className="underline font-semibold text-gray-500">Login Here.</p>
                        </Link>
                    
                    </div>
                   
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
