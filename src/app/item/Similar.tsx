"use client"
import Image from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import exampleCar from '../../../images/car3.jpeg'


export default function Similar (){

    return(
        <div >
           <div className="h-96"></div>
           <div className="font-bold text-gray-500 pl-48 ">
                <h1 className="pl-28 py-3 ml-6">SIMILAR ADS</h1>
                <div className='relative  w-full right-40 pl-10'>
                    <div className='bg-white h-64 w-56 rounded shadow-xl float-left ml-64 mx-2'>
                        <Image
                            src={exampleCar}
                            width={300}
                            height={300}
                            alt='e'
                            />
                            <div>
                                <h2 className='text-black '>Item name</h2>
                                <p className='text-gray-500'>Description</p>
                                <h1 className='text-black text-lg '>$1,000</h1>
                                <p className='text-gray-500 text-sm'>Location, ltd</p>
                            </div>
                    </div>
                    <div className='bg-white h-64 w-56 rounded shadow-xl ml-4 float-left '>
                        <Image
                            src={exampleCar}
                            width={300}
                            height={300}
                            alt='e'
                            />
                            <div>
                                <h2 className='text-black '>Item name</h2>
                                <p className='text-gray-500'>Description</p>
                                <h1 className='text-black text-lg '>$1,000</h1>
                                <p className='text-gray-500 text-sm'>Location, ltd</p>
                            </div>
                    </div>
                    <div className='bg-white h-64 w-56 rounded shadow-xl ml-4 float-left '>
                        <Image
                            src={exampleCar}
                            width={300}
                            height={300}
                            alt='e'
                        />
                        <div>
                            <h2 className='text-black '>Item name</h2>
                            <p className='text-gray-500'>Description</p>
                            <h1 className='text-black text-lg '>$1,000</h1>
                            <p className='text-gray-500 text-sm'>Location, ltd</p>
                        </div>
                    </div>
                    <div className='bg-white h-64 w-56 rounded shadow-xl ml-4 float-left '>
                        <Image
                            src={exampleCar}
                            width={300}
                            height={300}
                            alt='e'
                        />
                        <div>
                            <h2 className='text-black '>Item name</h2>
                            <p className='text-gray-500'>Description</p>
                            <h1 className='text-black text-lg '>$1,000</h1>
                            <p className='text-gray-500 text-sm'>Location, ltd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}