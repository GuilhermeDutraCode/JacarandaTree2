export default function Password () {
    return (
        <div className="flex justify-center ...">
        <div className="w-3/4">
            <h1 className="text-lg pt-4 py-2 pl-6">Change Password</h1>
            <form className="bg-white drop-shadow-lg p-4">
                <h1>New Password</h1>
                <input className="border-2 rounded" type="text" placeholder="New Password" />
                <h1>Repeat Password</h1>
                <input className="border-2 rounded" type="text" placeholder="Repeat Password" />
                
                <button className="block h-10 w-28 mt-4 text-white font-bold bg-green-600 rounded">Save</button>
            </form>
        </div>
    </div>
    )
}