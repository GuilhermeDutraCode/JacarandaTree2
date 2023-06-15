import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { ReactElement } from 'react'
import Link from 'next/link'

export default function Navbar(){
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
          <Link href="/signin" className='text-slate-50 px-10 relative left-14'> <p>Sign In</p></Link>
          <Link href="/register" className='text-slate-50 px-10 relative left-10'><p>Register</p></Link>
          <Link href="/" className='bg-fuchsia-900 text-slate-50 px-10 relative left-10 border border-fuchsia-200'><p>My Jacaranda</p></Link>
        </nav>
    )
}