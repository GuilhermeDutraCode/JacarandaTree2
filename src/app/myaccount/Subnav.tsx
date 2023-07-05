import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Subnav (){
    return (
        <div className="bg-fuchsia-900 p-4 px-36 h-20 ">
            <Link href="/" className='py-2 pl-8 text-white text-2xl font-bold'><FontAwesomeIcon className='h-8 inline' icon={faTree} style={{color: "#ffffff",}} /> JacarandaTree</Link>
            <button className='bg-white float-right h-12 w-32 mr-3 font-bold'>Post an Add</button>
        </div>
    )
}