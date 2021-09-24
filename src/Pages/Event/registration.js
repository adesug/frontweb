import React,{ useState } from 'react';

export default function EventRegister() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birth, setBirth] = useState("");
    const [address, setAddress] = useState("");
    const [event, setEvent] = useState("");


    return (
        <div className="w-full flex flex-wrap text-left fixed">
            <div className="w-1/2 shadow-2xl">
                <p className="h-screen hidden md:block  absolute text-lg py-80 ml-40 text-white font-bold">Registration Event Flow</p>
                <p className=" h-screen hidden md:block absolute text-base py-96 pb-96 ml-40 text-white font-semibold">

                    Come on, follow the event that we organize, and get new  <br />
                    think that you've never gotten before
                </p>
                <img className=" object-cover w-full h-screen hidden md:block" src="https://res.cloudinary.com/desug/image/upload/v1632501704/Plugin/photo1632501635_rlb2hu.jpg" alt="registration event" />
            </div>
            <div className=" md:w-1/2 flex flex-col justify-center ">
                <img className="object-cover w-screen h-screen block lg:hidden md:hidden" src="https://res.cloudinary.com/desug/image/upload/v1632501704/Plugin/photo1632501635_rlb2hu.jpg" alt="registration event"/>
                <div className="flex flex-col md:justify-start my-auto md:pt-0 px-8 md:px-24 lg:px-32 absolute">
                    <p className="text-3xl text-black font-poppins font-bold text-center">Register event</p>

                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className= { 
                            "relative h-10 input-component lg:ml-14 md:ml-0  mb-6 " +
                            (firstname.length > 0 ? "" : "empty")
                            }
                            >
                            <input
                                id="firtsname"
                                type="text"
                                name="firstname"
                                onChange={(e) => setFirstname(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 pl-5 transition-all border-gray-500"
                                value={firstname}
                            />
                            <label htmlFor="firstname" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold"> First Name</p>
                            </label>
                        </div>

                        <div className= {
                            "relative h-10 input-component lg:ml-14 md:ml-0  mb-6 " +
                        (lastname.length > 0 ? "" : "empty")
                        }
                        >
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                onChange={(e) => setLastname(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 pl-5 transition-all border-gray-500"
                                value={lastname}
                            />
                            <label htmlFor="lastname" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Last Name</p>
                            </label>
                        </div>
                        

                        <div className={
                            "relative h-10 input-component lg:ml-14 md:ml-0 mb-6 " +
                            (email.length > 0 ? "" : "empty") 
                            }
                            >
                            <input
                                id="email"
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 pl-5 transition-all border-gray-500"
                                value={email}
                            />
                            <label htmlFor="email" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Email</p>
                            </label>
                        </div>

                        <div className={
                            "relative h-10 input-component lg:ml-14 md:ml-0 mb-6 " + 
                            (phone.length > 0 ? "" : "empty")
                            }
                            >
                            <input
                                id="phone"
                                type="number"
                                name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 pl-5 transition-all border-gray-500"
                                value={phone}
                            />
                            <label htmlFor="phone" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Phone Number</p>
                            </label>
                        </div>

                        <div className={
                            "relative h-10 input-component lg:ml-14 md:ml-0 mb-6 " + 
                            (birth.length > 0 ? "" : "empty")
                            }
                            >
                            <input
                                id="birth"
                                type="text"
                                name="birth"
                                onChange={(e) => setBirth(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 pl-5  transition-all border-gray-500" 
                                value={birth}
                            />
                            <label htmlFor="birth" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Date Of Birth</p>
                            </label>
                        </div>

                        <div className={
                            "relative h-10 input-component lg:ml-14 md:ml-0 mb-6 " + 
                            (address.length > 0 ? "" : "empty")
                            }>
                            <input
                                id="address"
                                type="text"
                                name="address"
                                onChange={(e) => setAddress(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 pl-5 transition-all border-gray-500"
                                value={address}
                            />
                            <label htmlFor="address" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Address</p>
                            </label>
                        </div>

                        <div className={
                            "relative h-10 input-component lg:ml-14 md:ml-0  mb-6 " + 
                            (event.length > 0 ? "" : "empty")
                            }>
                            <input
                                id="event"
                                type="text"
                                name="event"
                                onChange={(e) => setEvent(e.target.value)}
                                className="h-5/6 w-full rounded-full py-6 mr-52 pl-5 transition-all border-gray-500"
                                value={event}

                            />
                            <label htmlFor="address" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white rounded-t-md px-1 ml-5">
                                <p className="text-gray-400 font-bold">Kind Of Event</p>
                            </label>
                        </div>

                       
                        <input type="submit" value="Register" className="bg-blue-400 text-white font-bold text-lg hover:bg-blue-300 p-2 rounded-full lg:ml-14 md:ml-0 " />
                    </form>

                </div>

            </div>



        </div>

    )
}
