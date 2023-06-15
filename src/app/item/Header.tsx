import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <div>
            <div className="h-20 bg-fuchsia-800 py-6 px-14">
            <Link href="/" className='py-2 pl-8 text-white text-2xl font-bold'><FontAwesomeIcon className='h-8 inline' icon={faTree} style={{color: "#ffffff",}} /> JacarandaTree</Link>
            <button className="bg-white float-right h-10 w-32 font-bold rounded-sm drop-shadow-lg">Post an add</button>
            </div>
            <div className="block w-full h-16 text-center drop-shadow-xl">
                    <select className="h-16 w-44">
                        <option value="Cars">All Categories</option>
                        <option value="Cars">Cars & Vehicles</option>
                        <option value="Pets">Pets</option>
                        <option value="Real State">Real State</option>
                        <option value="Jobs">Jobs</option>
                        <option value="Baby & Children">Baby & Children</option>
                        <option value="Clothing & Jewellery">Clothing & Jewellery</option>
                        <option value="Electronics">Electronics & Computer</option>
                        <option value="Sport">Sport & Fitness</option>
                        <option value="Books">Books, music & games</option>
                        <option value="Tickets">Tickets</option>
                    </select>
                    <input className="h-16 w-2/4 border border-emerald-400" type="text" placeholder="I'm looking for..." />
                    <input className="h-16" type="text" placeholder=" Australia" />
                    <div className="inline">
                    <FontAwesomeIcon className="h-full bg-green-600 p-4 inline" 
                    icon={faMagnifyingGlass} 
                    style={{color: "#ffffff"}}/>
                    </div>                   
            </div>
            <p className="px-10 pl-72 m-2 text-sm">Home {`>`} Croydon {`>`} Cars, Vans % Utes {`>`} Land Rover {`>`} Range Rover Sport {`>`} ad ID 1312477272</p>
        </div>
    )
}