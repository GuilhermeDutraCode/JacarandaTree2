'use client'
import Link from "next/link";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthenticationContext } from "../context/AuthContext";

export default function Center(){
    const { error, loading, data, setAuthState } = useContext(AuthenticationContext)
    console.log(data);
    

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        const res = await fetch(
            "/api/signin",
            {
                method: 'POST',
                body: JSON.stringify(data)
            }
        )
        const cleanRes = await res.json();
        console.log(cleanRes);

        setAuthState({
            data: cleanRes,
            error: null,
            loading: false
        })
    }

    return(
        <>
        <h1 className="text-center text-4xl py-2">Sign in</h1>
        <div className="py-3 px-24 mt-10 flex  justify-center">
            <form onSubmit={handleSubmit} 
            className="bg-white w-2/4 block p-10 flex flex-col items-center">  
                <input
                required 
                className="block border-2 rounded w-52 pl-3 my-2 h-10"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                type="text" />

                <input 
                required
                className="block border-2 rounded w-52 pl-3 h-10 my-2" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} 
                type="password" />

                <div className="inline">
                    <input className="p-2" type="checkbox"/>
                    <label className="p-2 text-xs text-gray-600 text-left">Remember Me</label>
                    <Link href="/" className="p-2 text-xs text-emerald-600 underline text-left">Forgot your password?</Link>
                </div>
                <button className="bg-emerald-600 h-10 w-52 text-white rounded m-2">Sign in</button>
                <p className="text-sm">Dont have an account? <Link className="text-emerald-600 underline" href="/register">Register now</Link></p>
            </form>
        </div>  
        </>
    )
}