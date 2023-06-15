import { faLocationDot, faMessage, faPhoneFlip, faShield, faShieldAlt, faShieldCat, faShieldVirus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import exampleCar from "../../../images/car3.jpeg"

export default function Feed (){
    return(
        <div className="flex pl-64 p-2 h-fit drop-shadow-lg rounded">
        <div className="w-1/4">  
            <h1 className="text-lg">487 Results</h1>
            <br />
            <h2 className="font-bold">Filter & Refine</h2>
            <hr />
            <br />
            <h2 className="font-bold">Category</h2>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Cars & Vehicles</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Pets</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Real State</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Jobs</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Baby & Children</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Clothing & Jewellery</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Electronics & Computer</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Sport & Fitness</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Books, music & games</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">Tickets</Link>
            <hr />
            <h2 className="font-bold">Location</h2>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">ACT</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">NSW</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">NT</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">QLD</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">SA</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">TA</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">VIC</Link>
            <Link href={"/"} className="text-emerald-700 text-sm block py-2">WA</Link>
            <hr />
            <h2 className="font-bold">Price</h2>
            <input className="w-12 h-8" type="text" placeholder="min"/>
            <input className="w-12 h-8" type="text" placeholder="max"/>
            <button className="w-12 h-8 border-2 border-emerald-700 text-emerald-700 rounded">Go</button>
        </div>
        <div className=" mx-2 py-3 w-1/2 drop-shadow-lg rounded">

        <div className='relative  w-full right-40 pl-10 border-10'>
            <div className='bg-white h-72 w-64 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
        </div>

        <div className='relative  w-full right-40 pl-10 border-10'>
            <div className='bg-white h-72 w-64 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
        </div>


        <div className='relative w-full right-40 pl-10 mt-10'>
            <div className='bg-white h-72 w-64 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
              </div>
            </div>

            <div className='relative  w-full right-40 pl-10 border-10'>
            <div className='bg-white h-72 w-64 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={exampleCar}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>Item name</h2>
                    <p className='text-gray-500'>Descriptsaion</p>
                    <h1 className='text-black text-lg '>$1,000</h1>
                    <p className='text-gray-500 text-sm'>Location, ltd</p>
                </div>
            </div>
        </div>

        </div>
    </div>
    )
}