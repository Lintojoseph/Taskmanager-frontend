

const Login=()=>{
    return(
        <div className="flex justify-center items-center h-screen bg-gray-300">
            <div className="w-96 p-6 bg-white rounded-md ">
                <h1 className="text-3xl block text-center font-semibold">Login</h1>
                <hr className="mt-3"></hr>
                <div className="mt-3">
                <label className="block mb-2">Name</label>
                <input type="text" placeholder="enter name" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
                </div>
                <div className="mt-3">
                <label className="block mb-2">Passwod</label>
                <input type="text" placeholder="enter password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
                </div>
                <div className="mt-2">
                <p className="text-neutral-500">Are you new user?<a href='/register' className="text-blue-400">Create Account</a></p>
                </div>
                <div className="mt-3">
                <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Login</button>
                </div>
                
            
            </div>

        </div>
    )

}

export default Login

 