export default function Item ({ price, location, name, mainImage }: {price: string; location: string; name: string; mainImage: string}){
    return(
        <div className="w-72 h-60 m-3 overflow-hidden border cursor-pointer bg-white p-1">
            <img
                src={mainImage}
                alt=""
                className="w-full h-36"/>
            <div className="bg-black w-1/2 h-8 opacity-60">
              <p className="text-white text-2xl">${price}</p>
            </div>
            <div className="p-1">
              <h3 className=" mb-2">{name}</h3> 
              <p className="text-gray-400"> {location}</p>
            </div>        
      </div>
    )
}