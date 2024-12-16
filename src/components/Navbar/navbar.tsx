


const NavBar = () => {
    return (
        <div className="flex justify-between sticky bg-slate-200 top-0 p-4 shadow-sm items-center">
            <div>
                <h2 className="font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Task Manager</h2>
            </div>
            <div className=" flex font-medium gap-4">
                <div>
                    <button className="bg-blue-400 rounded-lg px-2 py-2 hover:bg-blue-600">+ Add Task </button>
                </div>
                <div>
                    <button className="gap-4 bg-slate-300 rounded-lg px-2 py-2 hover:bg-slate-400">logout</button>
                </div>
                
                
            </div>


        </div>
    )
}

export default NavBar