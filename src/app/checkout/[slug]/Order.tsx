export default function Order (props : any) {
    let itemInformation = props.props
    console.log(itemInformation.name);
    

   return(
    <div className="bg-slate-300 rounded p-4  mt-2 mx-44 drop-shadow-lg">
        <h1 className="inline font-bold">Your order: </h1>
        <h1 className="inline">{itemInformation.name}</h1>
        <h1>{itemInformation.description}</h1>
        <h1  className="inline font-bold">Price </h1>
        <h1  className="inline">${itemInformation.price}</h1>
        <h1 className="font-bold">Card Number</h1>
        <input type="text"  className="inline"/>
        <h1 className="font-bold">Expiry (MM/YY)*</h1>
        <input type="text" className="inline"/>
        <h1 className="font-bold">Card Last digits</h1>
        <input type="text" className="inline"/>
        <h1 className="font-bold">TOTAL: ${itemInformation.price}</h1>
        
       
    </div>
   )
}