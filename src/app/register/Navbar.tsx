import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Navbar(){
    return (
        <nav className="bg-fuchsia-950 pb-3 flex h-12 pl-14">
            <Link href="/" className='py-2 pl-8 text-white text-2xl font-bold'><FontAwesomeIcon className='h-8 inline' icon={faTree} style={{color: "#00b303",}} /> JacarandaTree</Link>
        </nav>
    )
}