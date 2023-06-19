import prisma from "../../../lib/prisma";
import Item from "./Item";

export default async function Gallery (){

  const items = await prisma.item.findMany({ take: 20 })
  // console.log(items);
  
    return (
  <div>
    <h1 className="tracking-wide text-green-700 text-center underline text-lg font-bold">Homepage Gallery</h1>
    <div className="py-2 px-24 mt-10 flex  justify-center">
        <Item price={items[2].price} location={items[2].location} name={items[2].name} mainImage={items[2].main_image}/>
        <Item price={items[3].price} location={items[3].location} name={items[3].name} mainImage={items[3].main_image}/>
        <Item price={items[4].price} location={items[4].location} name={items[4].name} mainImage={items[4].main_image}/>
        <Item price={items[5].price} location={items[5].location} name={items[5].name} mainImage={items[5].main_image}/>
    </div>
      <div className="py-3 px-24 mt-10 flex  justify-center">
        <Item price={items[6].price} location={items[6].location} name={items[6].name} mainImage={items[6].main_image}/>
        <Item price={items[7].price} location={items[7].location} name={items[7].name} mainImage={items[7].main_image}/>
        <Item price={items[8].price} location={items[8].location} name={items[8].name} mainImage={items[8].main_image}/>
        <Item price={items[9].price} location={items[9].location} name={items[9].name} mainImage={items[9].main_image}/>
      </div>
  </div>
    )
}