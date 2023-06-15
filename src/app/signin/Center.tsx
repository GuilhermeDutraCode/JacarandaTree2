import Footer from "@/home/Footer";
import Link from "next/link";

export default function Center(){
    return(
        <>
        <h1 className="text-center text-4xl py-2">Sign in</h1>
        <div className="py-3 px-24 mt-10 flex  justify-center">
            <div className="bg-white w-2/4 block p-10 flex flex-col items-center">
                <input className="block border-2 rounded w-52 pl-3 my-2 h-10" placeholder="Email address" type="text" />
                <input className="block border-2 rounded w-52 pl-3 h-10 my-2" placeholder="Your name" type="text" />
                <div className="inline">
                <input className="p-2" type="checkbox"/>
                <label className="p-2 text-xs text-gray-600 text-left">Remember Me</label>
                <Link href="/" className="p-2 text-xs text-emerald-600 underline text-left">Forgot your password?</Link>
                </div>
                <button className="bg-emerald-600 h-10 w-52 text-white rounded m-2">Sign in</button>
                <p className="text-sm">Dont have an account? <Link className="text-emerald-600 underline" href="/register">Register now</Link></p>
            </div>
        </div>  
        </>
    )
}