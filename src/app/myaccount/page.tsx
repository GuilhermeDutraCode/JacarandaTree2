import Footer from "../home/Footer";
import Navbar from "../home/Navbar";
import Email from "./Email";
import Password from "./Password";
import Personal from "./Personal";
import Subnav from "./Subnav";

export default function Page (){
   return(
    <main>
        <Navbar />
        <Subnav />
        <Personal />
        <Password />
        <Email />
        <Footer />
    </main>
   )
}