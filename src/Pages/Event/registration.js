import React from 'react'

export default function EventRegister() {
    return (
        <div className="w-full flex flex-wrap text-left fixed">
            <div className="w-1/2 shadow-2xl">
                <p className="h-screen hidden md:block  absolute text-lg py-80 ml-40 text-white font-bold">Registration Event Flow</p>
                <p className=" h-screen hidden md:block absolute text-base py-96 pb-96 ml-40 text-white font-semibold">

                    Come on, follow the event that we organize, and get new  <br />
                    think that you've never gotten before
                </p>
                <img className=" object-cover w-full h-screen hidden md:block" src="https://res.cloudinary.com/desug/image/upload/v1630965479/Plugin/leon-Oalh2MojUuk-unsplash_odvvq8.jpg" alt="registration event" />
            </div>
            <div className=" md:w-1/2 flex flex-col justify-center ">
                <img className="object-cover w-full h-screen block lg:hidden md:hidden" src="https://res.cloudinary.com/desug/image/upload/v1630965479/Plugin/leon-Oalh2MojUuk-unsplash_odvvq8.jpg" alt="registration event"/>
                <div className="flex flex-col md:justify-start my-auto md:pt-0 px-8 md:px-24 lg:px-32 absolute ml-10">
                    <p className="text-3xl mr-9 text-black font-poppins font-bold text-center">Register event</p>

                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className="relative h-10 input-component empty lg:ml-14 md:ml-0 ml-8  mb-6">
                            <input
                                id="firtsname"
                                type="text"
                                name="firstname"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="firstname" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold"> First Name</p>
                            </label>
                        </div>

                        <div className="relative h-10 input-component empty  lg:ml-14 md:ml-0 ml-8  mb-6">
                            <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="lastname" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Last Name</p>
                            </label>
                        </div>
                        

                        <div className="relative h-10 input-component empty lg:ml-14 md:ml-0 ml-8  mb-6">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="email" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Email</p>
                            </label>
                        </div>

                        <div className="relative h-10 input-component empty  lg:ml-14 md:ml-0 ml-8  mb-6">
                            <input
                                id="phone"
                                type="number"
                                name="phone"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="phone" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Phone Number</p>
                            </label>
                        </div>

                        <div className="relative h-10 input-component empty  lg:ml-14 md:ml-0 ml-8  mb-6">
                            <input
                                id="birth"
                                type="text"
                                name="birth"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500" 
                            />
                            <label htmlFor="birth" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Date Of Birth</p>
                            </label>
                        </div>

                        <div className="relative h-10 input-component empty  lg:ml-14 md:ml-0 ml-8  mb-6">
                            <input
                                id="address"
                                type="text"
                                name="address"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="address" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Address</p>
                            </label>
                        </div>

                        <div className="relative h-10 input-component empty  lg:ml-14 md:ml-0 ml-8  mb-6">
                            <input
                                id="address"
                                type="text"
                                name="address"
                                className="h-5/6 w-full rounded-full px-24 py-6 transition-all border-gray-500"
                            />
                            <label htmlFor="address" className="absolute left-10 bottom-4 transition-all  text-gray-900 bg-white px-1 ml-5">
                                <p className="text-gray-400 font-bold">Kind Of Event</p>
                            </label>
                        </div>

                       
                        <input type="submit" value="Register" className="bg-blue-400 text-white font-bold text-lg hover:bg-blue-300 p-2 rounded-full lg:ml-14 md:ml-0 ml-8  " />
                    </form>

                </div>

            </div>



        </div>

    )
}
