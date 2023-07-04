import prisma from "../../lib/prisma";
import Featured from "./home/Featured";
import Footer from "./home/Footer";
import Gallery from "./home/Gallery";
import Navbar from "./home/Navbar";
import SearchBar from "./home/SearchBar";



export default async function Home() {

  const items = await prisma.item.findMany({ take: 10 })

  return (
    <main>   
        <Navbar />
        <SearchBar />
        <Gallery items={items}/>
        <Featured />
        <Footer />        
    </main>
  )
}
