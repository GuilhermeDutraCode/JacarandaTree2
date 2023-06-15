import Link from "next/link";

export default function Center(){
    return(
        <div>
            <h1 className="text-center text-4xl py-2">Register</h1>
        <div className="py-3 px-24 mt-10 flex  justify-center">
            <div className="bg-white w-2/4 block p-10 flex flex-col items-center">
                <p className="p-2 text-sm">By registering, I agree to JacarandaTree's <Link href='/' className="text-emerald-500 underline">Terms of Use</Link> and <Link href='/' className="text-emerald-500 underline">Privace Policy</Link> and I consent to receiving marketing communications from JacarandaTree.</p>
                <input className="block border-2 rounded w-52 pl-3 my-2 h-10" placeholder="Email address" type="text" />
                <input className="block border-2 rounded w-52 pl-3 h-10 my-2" placeholder="Your Name" type="text" />
                <input className="block border-2 rounded w-52 pl-3 h-10 my-2" placeholder="Your Last Name" type="text" />

                <input className="block border-2 rounded w-52 pl-3 h-10 mt-10" placeholder="Address Name" type="text" />
                <input className="block border-2 rounded w-52 pl-3 h-10 mt-2" placeholder="Suburb" type="text" />
                <input className="block border-2 rounded w-52 pl-3 h-10 mt-2" placeholder="State" type="text" />
                <input className="block border-2 rounded w-52 pl-3 h-10 mt-2" placeholder="Postcode" type="text" />

                <input className="block border-2 rounded w-52 pl-3 h-10  mt-7 mb-2" placeholder="Password" type="text" />
                <input className="block border-2 rounded w-52 pl-3 h-10 my-2" placeholder="Comfirm Password" type="text" />
                <button className="bg-emerald-600 h-10 w-52 text-white rounded m-2">Register</button>
                <p>Already registered with JacarandaTree? <Link href='/' className="text-emerald-500">Sign in</Link></p>
            </div>
        </div>  
        </div>
    )
}