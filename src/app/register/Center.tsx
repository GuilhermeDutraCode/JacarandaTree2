"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import bodyParser from "body-parser";

function loadData() {
    axios.get("/api/register")
      .then((response) => {
        console.log(response.data); // "_Christo"
        // Use the data as needed in your front-end code
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
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

    const handleSubmit = async (e: any) => {
        e.preventDefault();

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

        axios.post("/api/register", data)
            .then(function (response){
                console.log('sex');    
            })
            .catch(function (error) {
                console.log(error);
            });
    };
   
    useEffect(() => {
        loadData();
    }, []);
      
    
    return(
        <div>
            <h1 className="text-center text-4xl py-2">Register</h1>
        <div className="py-3 px-24 mt-10 flex  justify-center">
            <div className="bg-white w-2/4 block p-10 flex flex-col items-center">
                <p className="p-2 text-sm">By registering, I agree to JacarandaTree's <Link href='/' className="text-emerald-500 underline">Terms of Use</Link> and <Link href='/' className="text-emerald-500 underline">Privace Policy</Link> and I consent to receiving marketing communications from JacarandaTree.</p>
                    <form onSubmit={handleSubmit}>
                        <input 
                        className="block border-2 rounded w-52 pl-3 my-2 h-10"
                        placeholder="Email address"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <input
                         className="block border-2 rounded w-52 pl-3 h-10 my-2"
                         placeholder="Your Name" 
                         type="text"
                         value={fName}
                         onChange={(e) => setFName(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10 my-2" 
                        placeholder="Your Last Name" 
                        type="text"
                        value={lName}
                        onChange={(e) => setlName(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10 mt-10" 
                        placeholder="Address" 
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10 mt-2" 
                        placeholder="Suburb" 
                        type="text"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}/>
                        <input
                         className="block border-2 rounded w-52 pl-3 h-10 mt-2" 
                         placeholder="State" 
                         type="text"
                         value={state}
                         onChange={(e) => setState(e.target.value)}/>
                        <input
                        className="block border-2 rounded w-52 pl-3 h-10 mt-2"
                        placeholder="Postcode"
                        type="text"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}/>
                        <input 
                        className="block border-2 rounded w-52 pl-3 h-10  mt-7 mb-2"
                        placeholder="Password" 
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <input
                        className="block border-2 rounded w-52 pl-3 h-10 my-2"
                        placeholder="Comfirm Password"
                        type="text"
                        value={comfirmedPassword}
                        onChange={(e) => setComfirmedPassword(e.target.value)}/>
                        <button className="bg-emerald-600 h-10 w-52 text-white rounded m-2">Register</button>
                    </form>
                <p>Already registered with JacarandaTree? <Link href='/' className="text-emerald-500">Sign in</Link></p>
            </div>
        </div>  
        </div>
    )
}