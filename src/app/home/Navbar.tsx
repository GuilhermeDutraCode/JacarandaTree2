'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";



export default function Navbar(){
  let isLogin = false
  const { error, loading, data, setAuthState } = useContext(AuthenticationContext)
  console.log(data);

  if(data){
    isLogin = true
  }

  const handleClick = () => {
    setAuthState({
      data: null,
      error: null,
      loading: false
  })
  }

    return (
        <nav className="bg-fuchsia-950 p-2 flex h-10 pl-14">
          <Link href="/"><FontAwesomeIcon icon={faHouseChimney} style={{color: "#ffffff", width: "23px", height: "23px"}}/></Link>
          <p className='text-white pl-5 px-9'> | </p>
          <Link href="/" className='text-slate-50 px-9'><p>Cars & Vehicles </p></Link>
          <Link href="/" className='text-slate-50 px-9'><p>Home & Garden</p></Link>
          <Link href="/" className='text-slate-50 px-9'><p>Pets</p></Link>
          <Link href="/" className='text-slate-50 px-9'><p>Jobs</p></Link>
          <Link href="/" className='text-slate-50 px-9'><p>Real State</p></Link>
          <Link href="/" className='text-slate-50 px-9'><p>Services for Hire</p></Link>
          <Link href="/" className='text-slate-50 px-9'><p>More...</p></Link>
          {isLogin ? (
            <>
              <Link href="/" className='text-slate-50 px-10 relative left-10'>
              <button onClick={handleClick}>Sign Out</button>
            </Link>
              
            </>
          ) : (
            <>
              <Link href="/signin" className='text-slate-50 px-10 relative left-10'>
                <p>Sign In</p>
              </Link>
              <Link href="/register" className='text-slate-50 px-10 relative left-10'>
                <p>Register</p>
              </Link>
            </>
          )
          }
          
          {isLogin ? (
            <Link href="/myaccount" className='bg-fuchsia-900 text-slate-50 px-10 relative left-10 border border-fuchsia-200'><p>{data?.first_name}</p></Link>
          ) : (<Link href="/signin" className='bg-fuchsia-900 text-slate-50 px-10 relative left-10 border border-fuchsia-200'><p>My Jacaranda</p></Link>)}

          
        </nav>
    )
}