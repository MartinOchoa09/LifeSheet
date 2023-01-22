import data  from "../data/data";
import casa from "../assets/icons/casa.png";
import correo from "../assets/icons/correo.png";
import mochila from "../assets/icons/mochila.png"
import telefono from "../assets/icons/telefono.png";
import "../assets/Styles/foter.css"

function Foter() {
    return ( 
        <div className="divpadre">
            <div>
               <img src={mochila} alt="" />
               <h3>{data.Footer.miinfo[0].escuela}</h3>
            </div>
            <div>
                <img src={correo} alt="" />
                <h3>{data.Footer.miinfo[1].correo}</h3>
            </div>
            <div>
                <img src={casa} alt="" />
                <h3>{data.Footer.miinfo[2].localidad}</h3>
            </div>
            <div>
                <img src={telefono} alt="" />
                <h3>{data.Footer.miinfo[3].telefono}</h3>
            </div>
        </div>
     );
}

export default Foter;