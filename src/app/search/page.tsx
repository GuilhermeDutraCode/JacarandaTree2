import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import Feed from "./Feed";
import Searcha from "./Search";



export default function Search(){
    return(
        <main>
            <Navbar />
            <Searcha />
            <Feed />
            <Footer />
        </main>
    )
}