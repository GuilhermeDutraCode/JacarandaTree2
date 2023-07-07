export default function Order (props : any) {
    let itemInformation = props.props
    console.log(itemInformation.name);
    

   return(
    <div>
        <h1>Your order</h1>
        <h1>{itemInformation.name}</h1>
        <h1>{itemInformation.description}</h1>
        <h1>price</h1>
        <h1>{itemInformation.price}</h1>

        <h1>TOTAL: {itemInformation.price}</h1>
        <button>Place Order</button>
    </div>
   )
}