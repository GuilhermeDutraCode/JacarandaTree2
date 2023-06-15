export default function Item (){
    return(
        <div className="w-72 h-60 m-3 overflow-hidden border cursor-pointer bg-white p-1">
            <img
                src="https://res.akamaized.net/domain/image/upload/t_web/v1587708707/For_Sale_Sign_Sydney_35_mhgyzn.jpg"
                alt=""
                className="w-full h-36"/>
            <div className="bg-black w-1/2 h-8 opacity-60">
              <p className="text-white text-2xl">$10,000</p>
            </div>
            <div className="p-1">
              <h3 className=" mb-2">Modular Home on Wheels - 2 Bed</h3> 
              <p className="text-gray-400"> Clontarf</p>
            </div>        
      </div>
    )
}