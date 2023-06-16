import Item from "./Item";

export default function Gallery (){
    return (
  <div>
    <h1 className="tracking-wide text-green-700 text-center underline text-lg font-bold">Homepage Gallery</h1>
    <div className="py-2 px-24 mt-10 flex  justify-center">
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
      <div className="py-3 px-24 mt-10 flex  justify-center">
          <Item />
          <Item />
          <Item />
          <Item />
      </div>
  </div>
    )
}