
import Header from "./Header";
import Advertisement from "./Advertisement";
import Similar from "./Similar";
import Footer from "../../home/Footer";
import Navbar from "../../home/Navbar";
import prisma from "../../../../lib/prisma";
import { log } from "console";



export default function Page(data: any){
    let slug = data.params.slug
    return(
        <main>
            <Navbar />
            <Header />
            <Advertisement slug={slug}/>
            <Similar />
            <div className="h-72"></div>
            <Footer />
        </main>      
    )
}