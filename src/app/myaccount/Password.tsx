'use client'
import { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthContext";

export default function Password () {
    const { error, loading, data, setAuthState } = useContext(AuthenticationContext)
    let success = null
    const [ formData, setFormData ] = useState({
        password: "",
        comfirmedPassword: "",
        id: 0
    });

    const handleChange = async ( e : any ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async ( e : any ) => {
        e.preventDefault()

        formData.id = data?.id ?? 0

        if(formData.password === formData.comfirmedPassword){
            const res = await fetch(
                "/api/edit-password",
                {
                    method: 'POST',
                    body: JSON.stringify(formData)
                }
            )
            const response = await res.json();
            console.log(response);
        } else {
            alert("Passwords must match!")
        }
    }

    return (
        <div className="flex justify-center ...">
        <div className="w-3/4">
            <h1 className="text-lg pt-4 py-2 pl-6">Change Password</h1>
            <form onSubmit={handleSubmit} className="bg-white drop-shadow-lg p-4">
                <h1>New Password</h1>
                <input 
                className="border-2 rounded"
                value={formData.password} 
                onChange={handleChange}
                name="password"
                type="text" 
                placeholder="New Password" 
                />

                <h1>Repeat Password</h1>
                <input 
                className="border-2 rounded"
                onChange={handleChange}
                value={formData.comfirmedPassword}
                name="comfirmedPassword" 
                type="text" 
                placeholder="Repeat Password" 
                />
                
                <button type="submit" className="block h-10 w-28 mt-4 text-white font-bold bg-green-600 rounded">Save</button>
            </form>
        </div>
    </div>
    )
}