import { faFacebookF, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <div className="bg-fuchsia-950 p-2 flex h-10 px-32">
            <FontAwesomeIcon className="px-3 hover:bg-sky-700 hover:rounded" icon={faFacebookF} style={{color: "#fafafa",}} />
            <FontAwesomeIcon className="px-3 hover:bg-sky-400 hover:rounded" icon={faTwitter} style={{color: "#ffffff",}} />
            <FontAwesomeIcon className="px-3 hover:bg-red-600 hover:rounded" icon={faYoutube} style={{color: "#ffffff",}} />
            <FontAwesomeIcon className="px-3 hover:bg-fuchsia-600 hover:rounded" icon={faInstagram} style={{color: "#ffffff",}} />
            <p className="text-slate-400 text-xs ml-auto">Copyright © 2007-2023 JacarndaTree Ltd. All Rights Reserved.</p>
        </div>
    )
}