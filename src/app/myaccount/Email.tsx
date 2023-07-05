export default function Email (){
    return(
        <div className="flex justify-center ...">
            <div className="w-3/4">
                <h1 className="text-lg pt-4 py-2 pl-6">Change Email</h1>
                <form className="bg-white drop-shadow-lg mb-4 p-4">
                    <h1>Current E-mail</h1>
                    <input className="border-2 rounded" type="text" placeholder="Current E-mail" />
                    <h1>New E-mail</h1>
                    <input className="border-2 rounded" type="text" placeholder="New E-mail" />
                    <h1>Repeat New E-mail</h1>
                    <input className="border-2 rounded" type="text" placeholder="Repeat New E-mail" />
                    <button className="block h-10 w-28 mt-4 text-white font-bold bg-green-600 rounded">Save</button>
                </form>
            </div>
        </div>
    )
}