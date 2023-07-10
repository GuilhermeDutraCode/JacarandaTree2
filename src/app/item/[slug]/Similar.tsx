import Image from 'next/image';
import 'pure-react-carousel/dist/react-carousel.es.css';
import exampleCar from '../../../../images/car3.jpeg'
import prisma from '../../../../lib/prisma';

export default async function Similar (){
    let items = await prisma.item.findMany({ take: 5 })
    return(
        <div >
           <div className="h-96"></div>
           <div className="font-bold text-gray-500 pl-48 ">
                <h1 className="pl-28 ml-6">SIMILAR ADS</h1>
                <div className='relative  w-full right-40 pl-10'>
                    <div className='bg-white h-68 w-56 rounded shadow-xl float-left ml-64 mx-2'>
                        <Image
                            src={items[0].main_image}
                            width={300}
                            height={300}
                            alt='e'
                            />
                            <div>
                                <h2 className='text-black '>{items[0].name}</h2>
                                <p className='text-gray-500'>Description</p>
                                <h1 className='text-black text-lg '>${items[0].price}</h1>
                                <p className='text-gray-500 text-sm'>{items[0].location}</p>
                            </div>
                    </div>
                    <div className='bg-white h-68 w-56 rounded shadow-xl ml-4 float-left '>
                        <Image
                            src={items[1].main_image}
                            width={300}
                            height={300}
                            alt='e'
                            />
                            <div>
                                <h2 className='text-black '>{items[1].name}</h2>
                                <p className='text-gray-500'>Description</p>
                                <h1 className='text-black text-lg '>${items[1].price}</h1>
                                <p className='text-gray-500 text-sm'>{items[1].location}</p>
                            </div>
                    </div>
                    <div className='bg-white h-68 w-56 rounded shadow-xl ml-4 float-left '>
                        <Image
                            src={items[2].main_image}
                            width={300}
                            height={300}
                            alt='e'
                        />
                        <div>
                            <h2 className='text-black '>{items[2].name}</h2>
                            <p className='text-gray-500'>Description</p>
                            <h1 className='text-black text-lg '>${items[2].price}</h1>
                            <p className='text-gray-500 text-sm'>{items[2].location}</p>
                        </div>
                    </div>
                    <div className='bg-white h-68 w-56 rounded shadow-xl ml-4 float-left '>
                        <Image
                            src={items[3].main_image}
                            width={300}
                            height={300}
                            alt='e'
                        />
                        <div>
                            <h2 className='text-black '>{items[4].name}</h2>
                            <p className='text-gray-500'>Description</p>
                            <h1 className='text-black text-lg '>${items[4].price}</h1>
                            <p className='text-gray-500 text-sm'>{items[4].location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}