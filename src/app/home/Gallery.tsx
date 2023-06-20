import Link from "next/link";
import prisma from "../../../lib/prisma";
import Item from "./Item";



export default  function Gallery (items: any){

  // const items = await prisma.item.findMany({ take: 20 })
 console.log(items.items[2].price);
  
  return(
    <div>
      <h1 className="tracking-wide text-green-700 text-center underline text-lg font-bold">Homepage Gallery</h1>
      <div className="py-2 px-24 mt-10 flex  justify-center">
          <Link href={`/item/${items.items[2].slug}`}><Item price={items.items[2].price} location={items.items[2].location} name={items.items[2].name} mainImage={items.items[2].main_image}/></Link>
          <Link href={`/item/${items.items[3].slug}`}><Item price={items.items[3].price} location={items.items[3].location} name={items.items[3].name} mainImage={items.items[3].main_image}/></Link>
          <Link href={`/item/${items.items[4].slug}`}><Item price={items.items[4].price} location={items.items[4].location} name={items.items[4].name} mainImage={items.items[4].main_image}/></Link>
          <Link href={`/item/${items.items[5].slug}`}><Item price={items.items[5].price} location={items.items[5].location} name={items.items[5].name} mainImage={items.items[5].main_image}/></Link>
      </div>
        <div className="py-3 px-24 mt-10 flex  justify-center">
          <Link href={`/item/${items.items[6].slug}`}><Item price={items.items[6].price} location={items.items[6].location} name={items.items[6].name} mainImage={items.items[6].main_image}/></Link>
          <Link href={`/item/${items.items[7].slug}`}><Item price={items.items[7].price} location={items.items[7].location} name={items.items[7].name} mainImage={items.items[7].main_image}/></Link>
          <Link href={`/item/${items.items[8].slug}`}><Item price={items.items[8].price} location={items.items[8].location} name={items.items[8].name} mainImage={items.items[8].main_image}/></Link>
          <Link href={`/item/${items.items[9].slug}`}><Item price={items.items[9].price} location={items.items[9].location} name={items.items[9].name} mainImage={items.items[9].main_image}/></Link>
        </div>
    </div>

    )
}