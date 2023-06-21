"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import isValidAustralianPostcode from 'is-valid-australian-postcode'
  
export default  function Center(){
    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setlName] = useState("");
    const [address, setAddress] = useState("");
    const [suburb, setSuburb] = useState("");
    const [state, setState] = useState("");
    const [postcode, setPostcode] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmedPassword, setComfirmedPassword] = useState("")
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
    const [showDuplicateEmail, setShowDuplicateEmail] = useState(false);
    const [showInvalidEmail, setShowInvalidEmail] = useState(false)
    
    const resetValues = () => {
        setEmail(""), setFName(""), setlName(""), setAddress(""), setSuburb(""),
        setState(""), setPostcode(""), setPassword(""), setComfirmedPassword("")
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        resetValues()
        
        const data = {
            email: email,
            fName: fName,
            lName: lName,
            address: address,
            suburb: suburb,
            state: state,
            postcode: postcode,
            password: password,
            comfirmedPassword: comfirmedPassword
        };

        if(data.password !== data.comfirmedPassword){
            alert("Password must match")
            return
        }
        if(!isValidAustralianPostcode(postcode)){
            alert("Enter a valid postcode")
            return
        }  

        const validateEmail = async () => {
            if(!data.email.includes("@")){
                setShowSuccess(false)
                setShowFailure(false)
                setShowDuplicateEmail(false)
                setShowInvalidEmail(true)
                return
            }
            const res = await fetch("/api/checkemail" , {
                method: "POST",
                body: JSON.stringify(data.email),
                headers: {
                    'X-RapidAPI-Key': 'your-rapidapi-key',
                    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                },
            })
            if (res.ok) {
                const responseText = await res.text();
                if(responseText === 'duplicate'){
                    setShowSuccess(false)
                    setShowFailure(false)
                    setShowInvalidEmail(false)
                    setShowDuplicateEmail(true)
                    return                    
                }
              } else {
                console.error("Request failed with status:", res.status);
              }         
        }
        validateEmail()

        axios.post("/api/register", data)
            .then(function (response){
                if(response.data === "error"){
                    setShowSuccess(false)
                    setShowInvalidEmail(false)
                    setShowDuplicateEmail(false)
                    setShowFailure(true)
                    return 
                } else {
                    setShowFailure(false)
                    setShowInvalidEmail(false)
                    setShowDuplicateEmail(false)
                    setShowSuccess(true);
                }
                //console.log(response);        
            })
            .catch(function (error) {
                console.log(error);
            });
    };
      
    return(
        <div>
            <h1 className="text-center text-4xl py-1">Register</h1>
            <div className="mt-1 flex justify-center">
                {showSuccess &&<h1 className="h-10 p-1 border-2 w-1/4 text-center text-emerald-700 bg-emerald-100 border-emerald-700">Thanks for creating an account with JacarandaTree, please <Link href='/' className="text-emerald-700">Sign in</Link> </h1>}
                {showFailure &&<h1 className="h-10 p-1 border-2 w-1/4 text-center text-red-700 bg-red-100 border-red-700">Failed to create an account, please try again later</h1>}
                {showDuplicateEmail &&<h1 className="h-10 p-1 border-2 w-1/4 text-center text-red-700 bg-red-100 border-red-700">This email is already registered, please <Link href='/' className="text-red-700 underline">Sign in</Link></h1>}
                {showInvalidEmail &&<h1 className="h-10 p-1 border-2 w-1/4 text-center text-red-700 bg-red-100 border-red-700">Please enter a valid email</h1>}
            </div>
        <div className="py-3 px-24 mt-10 flex  justify-center">
            <div className="bg-white w-2/4 block p-10 flex flex-col items-center">
                <p className="p-2 text-sm">By registering, I agree to JacarandaTree's <Link href='/' className="text-emerald-500 underline">Terms of Use</Link> and <Link href='/' className="text-emerald-500 underline">Privace Policy</Link> and I consent to receiving marketing communications from JacarandaTree.</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                        className="block border-2 rounded w-52 pl-3 my-2 h-10"
                        placeholder="Email address"
                        type="text"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}/>
                        <input
                         className="block border-2 rounded w-52 pl-3 h-10 my-2"
                         placeholder="Your Name" 
                         type="text"
                         required
                         value={fName}
                         onChange={(e) => setFName(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10 my-2" 
                        placeholder="Your Last Name" 
                        type="text"
                        required
                        value={lName}
                        onChange={(e) => setlName(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10 mt-10" 
                        placeholder="Address" 
                        type="address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10 mt-2" 
                        placeholder="Suburb" 
                        type="text"
                        required
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}/>
                        <input
                         className="block border-2 rounded w-52 pl-3 h-10 mt-2" 
                         placeholder="State" 
                         type="text"
                         value={state}
                         required
                         onChange={(e) => setState(e.target.value)}/>
                        <input
                        className="block border-2 rounded w-52 pl-3 h-10 mt-2"
                        placeholder="Postcode"
                        type="text"
                        required
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10  mt-7 mb-2"
                        placeholder="Password" 
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <input
                        className="block border-2 rounded w-52 pl-3 h-10 my-2"
                        placeholder="Comfirm Password"
                        type="password"
                        required
                        value={comfirmedPassword}
                        onChange={(e) => setComfirmedPassword(e.target.value)}/>
                        <button className="bg-emerald-600 h-10 w-52 text-white rounded  m-2">Register</button>
                    </form>
                <p>Already registered with JacarandaTree? <Link href='/' className="text-emerald-500">Sign in</Link></p>
            </div>
        </div>  
        </div>
    )
}