import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar(){
    return(
        <div className="bg-indigo-950 h-80">
            <div style={{backgroundImage: "url(	https://static.gumtree.com.au/cached/img/au/homepage/homenew2/6/xlarge.webp?v=20220211)",
                height: "100%",
                width: "85%",
                left: "6.5%",
                right: "15%",
                position: "relative",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',}}>
                <h2 className="text-white font-bold text-xl pl-8">JacarandaTree</h2>
                <h2 className="text-white font-bold text-3xl p-8">Trade Together, Save Together</h2>
                <button className="text-white font-bold bg-green-600 rounded p-4 float-right m-4">Post an add</button>
                <div className="block w-full pt-20 text-center">
                    <select className="h-12 w-44" name="all_categories" id="all_categories">
                        <option value="Cars">All Categories</option>
                        <option value="Cars">Cars & Vehicles</option>
                        <option value="Pets">Pets</option>
                        <option value="Real State">Real State</option>
                        <option value="Jobs">Jobs</option>
                        <option value="Baby & Children">Baby & Children</option>
                        <option value="Clothing & Jewellery">Clothing & Jewellery</option>
                        <option value="Electronics">Electronics & Computer</option>
                        <option value="Sport">Sport & Fitness</option>
                        <option value="Books">Books, music & games</option>
                        <option value="Tickets">Tickets</option>
                    </select>
                    <input className="h-12 w-2/4 border border-emerald-400" type="text" placeholder="I'm looking for..." />
                    <input className="h-12" type="text" placeholder=" Australia" />
                    <button >     <FontAwesomeIcon className="h-10 bg-green-600 p-2" 
                    icon={faMagnifyingGlass} 
                    style={{color: "#ffffff"}}/></button>
                </div>
            </div>
        </div>
        
    )
}