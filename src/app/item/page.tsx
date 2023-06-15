import Navbar from "@/home/Navbar";
import Header from "./Header";
import Ad from "./Ad";
import Similar from "./Similar";
import Footer from "@/home/Footer";

export default function Item(){
    return(
        <main>
            <Navbar />
            <Header />
            <Ad />
            <Similar />
            <div className="h-72"></div>
            <Footer />
        </main>      
    )
}