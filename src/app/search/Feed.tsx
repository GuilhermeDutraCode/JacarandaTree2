import Image from "next/image";
import Link from "next/link";
import exampleCar from "../../../images/car3.jpeg"
import prisma from "../../../lib/prisma";

export default async function Feed (){
    let items = await prisma.item.findMany({ take:20 })
    console.log(items);
    
    return(
        <div className="flex pl-64 p-2 h-fit drop-shadow-lg rounded">
        <div className="w-1/4">  
            <h1 className="text-lg">{items.length} Results</h1>
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
                    src={items[0].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[0].name}</h2>
                    {/* <p className='text-gray-500 text-3xs'>{items[0].description}</p> */}
                    <h1 className='text-black text-lg '>${items[0].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[0].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={items[1].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[1].name}</h2>
                    {/* <p className='text-gray-500'>a</p> */}
                    <h1 className='text-black text-lg '>${items[1].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[1].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={items[2].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[2].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[2].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[2].location}</p>
                </div>
            </div>
            
        </div>

        <div className='relative  w-full right-40 pl-10 border-10'>
            <div className='bg-white h-72 w-64 rounded shadow-xl float-left'>
                <Image
                    src={items[3].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[3].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[4].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[4].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={items[4].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black'>{items[4].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[4].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[4].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={items[5].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black'>{items[5].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[5].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[5].location}</p>
                </div>
            </div>
        </div>


        <div className='relative w-full right-40 pl-10 mt-10'>
            <div className='bg-white h-72 w-64 rounded shadow-xl float-left'>
                <Image
                    src={items[6].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[6].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[6].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[6].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={items[7].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[7].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[7].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[7].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={items[8].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[8].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[8].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[8].location}</p>
                </div>
              </div>
            </div>

            <div className='relative  w-full right-40 pl-10 border-10'>
            <div className='bg-white h-72 w-64 rounded shadow-xl float-left'>
                <Image
                    src={items[9].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[9].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[9].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[9].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left ml-4 mr-4'>
                <Image
                    src={items[10].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[10].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[10].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[10].location}</p>
                </div>
            </div>
            <div className='bg-white h-72 w-60 rounded shadow-xl float-left'>
                <Image
                    src={items[12].main_image}
                    width={300}
                    height={400}
                    alt='e'
                    />
                <div>
                    <h2 className='text-black '>{items[12].name}</h2>
                    {/* <p className='text-gray-500'>Descriptsaion</p> */}
                    <h1 className='text-black text-lg '>${items[12].price}</h1>
                    <p className='text-gray-500 text-sm'>{items[12].location}</p>
                </div>
            </div>
        </div>

        </div>
    </div>
    )
}