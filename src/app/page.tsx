import Featured from "./home/Featured";
import Footer from "./home/Footer";
import Gallery from "./home/Gallery";
import Navbar from "./home/Navbar";
import SearchBar from "./home/SearchBar";


export default function Home() {
 
  return (
    <main>   
        <Navbar />
        <SearchBar />
        <Gallery />
        <Featured />
        <Footer />        
    </main>
  )
}
