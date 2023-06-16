import Link from "next/link";
import Item from "./Item";

export default function Featured(){
    return(
        <div className="bg-white">
            <h1 className="text-center text-4xl font-bold p-2">Featured Categories</h1>
            <p className="text-center text-gray-600 px-8">Browse through some of our most popular categories</p>
            <div className="py-3 px-24 mt-10 flex  justify-center">

        <div className="px-2 overflow-hidden cursor-pointer bg-white h-80 w-80 ">   
            <img
                src="https://static.gumtree.com.au/cached/img/au/homepage/pic-featured-category-18320.jpg?v=20220211"
                alt=""
                className="w-full h-full hover:border-b-blue-400 hover:border-b-8 border-b-transparent border-b-8"/>
            <h1 className="pl-2 font-bold text-4xl text-white z-10 relative bottom-24 bg-transparent border-0">Cars</h1>
            <h1 className="pl-2 text-blue-400 text-xl text-blue-600 z-10 relative bottom-20 bg-transparent border-0">104,100 ads</h1>   
        </div>

        <div className="px-2 overflow-hidden cursor-pointer bg-white h-80 w-80">   
            <img
                src="https://static.gumtree.com.au/cached/img/au/homepage/pic-featured-category-18397.jpg?v=20220211"
                alt=""
                className="w-full h-full hover:border-b-green-500 hover:border-b-8 border-b-transparent border-b-8"/>
            <h1 className="pl-2 font-bold text-4xl text-white z-10 relative bottom-24 bg-transparent border-0">Home & Garden</h1>
            <h1 className="pl-2 text-green-500 text-xl text-emerald-500 z-10 relative bottom-20 bg-transparent border-0">515,600 ads</h1>   
        </div>

        <div className="px-2 overflow-hidden cursor-pointer bg-white h-80 w-80">   
            <img
                src="https://static.gumtree.com.au/cached/img/au/homepage/pic-featured-category-9302.jpg?v=20220211"
                alt=""
                className="w-full h-full hover:border-b-red-600 hover:border-b-8 border-b-transparent border-b-8"/>
            <h1 className="pl-2 font-bold text-4xl text-white z-10 relative bottom-24 bg-transparent border-0">Jobs</h1>
            <h1 className="pl-2 text-red-600 text-xl text-red-500 z-10 relative bottom-20 bg-transparent border-0">11,400 ads</h1>   
        </div>

        <div className="px-2 overflow-hidden cursor-pointer bg-white h-80 w-80">   
            <img
                src="https://static.gumtree.com.au/cached/img/au/homepage/pic-featured-category-1000000.jpg?v=20220211"
                alt=""
                className="w-full h-full hover:border-b-purple-800 hover:border-b-8 border-b-transparent border-b-8"/>
            <h1 className="pl-2 font-bold text-4xl text-white z-10 relative bottom-24 bg-transparent border-0">Freebies</h1>
            <h1 className="pl-2 text-purple-800 text-xl text-emerald-500 z-10 relative bottom-20 bg-transparent border-0">12,700 ads</h1>   
        </div>
            </div>
            <div className="text-center bg-gray-200 py-5">
                <Link href="/" className="text-sm">Popular Items </Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Puppies</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Caravan</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Kitten</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Boat</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Ride On Mower</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Dog</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Trailer</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Hilux</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Golden Retriver</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Fridge</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Border Collie</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Ute</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">Car</Link>
                <Link href="/" className="text-sm text-emerald-600 px-4">French Bulldog</Link>
            </div>
        </div>
    )
}