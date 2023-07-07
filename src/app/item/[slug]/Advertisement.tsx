import { faLocationDot, faMessage, faPhoneFlip, faShield, faShieldAlt, faShieldCat, faShieldVirus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import prisma from "../../../../lib/prisma";


export default async function  Advertisement({slug}: any) {
    const item = await prisma.item.findUnique({
        where: {
            slug: slug
        }
    })    
    const itemOwner = await prisma.user.findUnique({
        where: {
            id: item?.user_id
        }
    })
    
    console.log(item)

    return (
        <div className="flex justify-center p-2 h-fit drop-shadow-lg rounded">
        <div className="w-1/2 h-96">
            <img src={item?.main_image} alt="main_photo" height={1400} width={900} />
            <div className="bg-white h-18 p-2  items-center">
                <span className="text-sm text-gray-400">467 views</span>
                <Link className="float-right text-sm text-gray-400" href={"/"}>Share</Link>
                <Link className="float-right pr-2 text-sm text-gray-400" href={"/"}>Save</Link>
                <hr className="bg-black"/>
                <h1 className="text-xl text-gray-800">{item?.name}</h1>
                <h1 className="text-2xl text-emerald-600">${item?.price}</h1>
                <p className="text-sm underline mr-"><FontAwesomeIcon icon={faLocationDot} style={{color:"#059669",}} className="h-6 w-8 inline "/>{item?.location}</p>
                {/* ITEM DESCRIPTION */}
                <p className="p-2">
                    {item?.description}
                </p>
            </div>
        </div>
        <div className="bg-white mx-2 py-2 w-72 drop-shadow-lg rounded">
            <h1 className="text-xl mr-4 text-extrabold">
                <FontAwesomeIcon className="w-20 inline h-10" icon={faUser}/>
                {itemOwner?.name_on_card}
            </h1>
            <input
             className="border-2 border-slate-400 rounded h-18 w-64 m-2"
             type="text"
             placeholder="Hi, I'm interested in your item." />
            <input 
            className="m-2"
             type="checkbox" 
             name="" 
             id="" />
             <p className="text-xs inline tracking-tighter">I consent to receive marketing and third party offers from JacarandaTree.</p>
             <button className="bg-green-500 h-14 rounded text-lg font-bold text-white w-64 m-2 block">
             <FontAwesomeIcon 
             className="h-10 w-10 inline px-2" 
             icon={faMessage} />
                 <Link href={`/checkout/${item?.slug}`}> Sign in to message</Link>
             </button>
             <p className="text-sm text-center text-slate-700">
                <FontAwesomeIcon 
                className="h-8 w-8 inline px-2" 
                icon={faPhoneFlip} 
                style={{color: "#18af61",}}/>0437093377
             </p>
             <hr className="bg-black"/>
             <p className="text-sm text-emerald-700 underline text-center">Sign in to make an offer</p>
            <div className="h-10 p-2 text-center inline w-72 ">
                <input className="border-2 border-emerald-700" type="text"  placeholder={`$${item?.price}`} />
                <button className="border-2 border-emerald-700 w-20 text-emerald-700 " >Go</button>
            </div>
            <hr className="bg-black my-1"/>
            <div className="p-2">
                <h1 className="text-lg text-slate-700 p-2">
                    <FontAwesomeIcon
                    className="h-10 w-10 inline"
                    icon={faShield} 
                    style={{color: "#0baf08",}}
                    />Safety and Security tips
                 </h1>
                 <div className="p-2 text-sm">
                    <p >
                    Be wary of sellers who demand a deposit before you meet them. Always meet in person and check all documents before you commit.
                    </p>
                    <br />
                    <p>
                    <Link className="underline" href={"/"} >Report this ad</Link>, If you're concerned this person's ad violates JacarandaTree's Pets Policy <Link className="underline" href={"/"} >JacarandaTree's Pets Policy</Link>
                    </p>
                 </div>
            </div>
        </div>
    </div>
)
}