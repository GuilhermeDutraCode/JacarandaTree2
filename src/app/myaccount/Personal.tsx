'use client'
import { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthContext";


export default function Personal () {
    const { error, loading, data, setAuthState } = useContext(AuthenticationContext)
   
    const [ formData, setFormData ] = useState({
        firstName: data?.first_name,
        lastName: data?.last_name,
        address: data?.address,
        suburb: data?.suburb,
        state: data?.state,
        postcode: data?.postcode,
        id: 0
    });

    const [success, setSuccess] = useState(false);
   
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async ( e : any ) => {
        e.preventDefault()

        formData.id = data?.id ?? 0

        const res = await fetch(
            "/api/edit-personal",
            {
                method: 'POST',
                body: JSON.stringify(formData)
            }
        )
        const response = await res.json();
        if(response){
            setSuccess(true);
            setTimeout(function(){
                setSuccess(false)
            }, 2500);
        }
        console.log(success);
        
    };
    

    return (
        <div className="flex justify-center ...">
            <div className="w-3/4">
                <h1 className="text-lg py-2 pl-6">Personal Information</h1>
                <form onSubmit={handleSubmit} className="bg-white drop-shadow-lg p-4">
                    {success? (
                        <h1 className="bg-green-600 text-white w-80 text-center">Information Updated Successfully.</h1>
                    ) : null}
                    <h1>First Name</h1>
                    <input
                    onChange={handleChange}
                    value={formData.firstName}
                    name="firstName"
                    className="border-2 rounded"
                    type="text" 
                    placeholder={data?.first_name}
                    />

                    <h1>Last Name</h1>
                    <input 
                    onChange={handleChange} 
                    value={formData.lastName}
                    name="lastName"
                    className="border-2 rounded" 
                    type="text" 
                    placeholder={data?.last_name} />

                    <h1>Address</h1>
                    <input 
                    onChange={handleChange}
                    value={formData.address}
                    name="address" 
                    className="border-2 rounded" 
                    type="text" 
                    placeholder={data?.address} />

                    <h1>Suburb</h1>
                    <input 
                    onChange={handleChange}
                    value={formData.suburb}
                    name="suburb" 
                    className="border-2 rounded" 
                    type="text" 
                    placeholder={data?.suburb}/>

                    <h1>State</h1>
                    <input 
                    onChange={handleChange}
                    value={formData.state}
                    name="state" 
                    className="border-2 rounded" 
                    type="text" 
                    placeholder={data?.state}/>

                    <h1>Post Code</h1>
                    <input
                    onChange={handleChange}
                    value={formData.postcode}
                    name="postcode"
                    className="border-2 rounded" 
                    type="text" 
                    placeholder={data?.postcode} />

                    <button type="submit" className="block h-10 w-28 mt-4 text-white font-bold bg-green-600 rounded">Save</button>
                </form>
            </div>
        </div>
    )
}