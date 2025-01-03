

const Register=()=>{
    return(
        
            <div className="flex justify-center items-center h-screen bg-gray-300">
                <div className="w-96 p-6 bg-white rounded-md">
                    <h1 className="text-3xl block text-center font-semibold">Register</h1>
                    <hr className="mt-3"></hr>
                    <div className="mt-3">
                        <label className="block mb-2">Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="enter name" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-300" required></input>
                    </div>
                    <div className="mt-3">
                        <label>password<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="enter password"className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-300" required></input>

                    </div>
                    <div className="mt-3">
                        <label>Confirm password<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="enter password"className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-300" required></input>

                    </div>
                    <div className="mt-3">
                        <button type="submit"className="border-2 border-indigo-100 bg-blue-500 rounded-lg p-1 item-center text-bold text-white w-full hover:bg-blue-800 hover:text-indigo-100">Register</button>
                    </div>

                </div>
                

            </div>

    

    )
}
export default Register