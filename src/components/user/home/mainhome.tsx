

const Home=()=>{
    return(
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="bg-white shadow-md rounded-lg p-5">
                <div className="flex justify-between item-center mb-5">
                    <h1 className="text-xl font-bold text-green-600">Task Manager</h1>
                    <div className="space-x-3">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Export to Excel</button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">+ Add new Task</button>

                    </div>

                </div>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse border border-grey-200">
                        <thead>
                            <tr className="bg-gray-200 text-grey-600 uppercase text-sm leading-normal"></tr>
                            <th className="py-3 px-4 text-left">ID</th>
                            <th className="py-3 px-4 text-left">Title</th>
                            <th className="py-3 px-4 text-left">Describtion</th>
                            <th className="py-3 px-4 text-center">Status</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </thead>
                        <tbody className="text-grey-600 text-sm">
                            <tr className="border-b border-grey-200 hover:bg-grey-100">
                                <td className="py-3 px-4">1</td>
                                <td className="py-3 px-4">iam</td>
                                <td className="py-3 px-4">this is shanthibhavan</td>
                                <td className="py-3 px-4 text-center">
                                        Done
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 mr-2">Delete</button>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">Edit</button>
                                </td>
                                

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        
        </div>
    )
}

export default Home