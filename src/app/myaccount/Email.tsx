'use client'
import { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthContext";

export default function Email () {
    const { error, loading, data, setAuthState } = useContext(AuthenticationContext)
    let success = null
    const [ formData, setFormData ] = useState({
        email: "",
        comfirmedMail: "",
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

        if(formData.email === formData.comfirmedMail){
            const res = await fetch(
                "/api/edit-email",
                {
                    method: 'POST',
                    body: JSON.stringify(formData)
                }
            )
            const response = await res.json();
            console.log(response);
        } else {
            alert("Email must match!")
        }
    }
    
    return (
        <div className="flex justify-center ...">
        <div className="w-3/4">
            <h1 className="text-lg pt-4 py-2 pl-6">Change Email</h1>
            <form onSubmit={handleSubmit} className="bg-white drop-shadow-lg p-4">
                <h1>New Email</h1>
                <input 
                className="border-2 rounded"
                value={formData.email} 
                onChange={handleChange}
                name="email"
                type="email" 
                placeholder="New Email" 
                />

                <h1>Repeat Email</h1>
                <input 
                className="border-2 rounded"
                onChange={handleChange}
                value={formData.comfirmedMail}
                name="comfirmedMail" 
                type="email" 
                placeholder="Repeat Email" 
                />
                
                <button type="submit" className="block h-10 w-28 mt-4 text-white font-bold bg-green-600 rounded">Save</button>
            </form>
        </div>
    </div>
    )
}