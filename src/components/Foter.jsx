import data  from "../data/data";
import "../assets/Styles/foter.css";

function Foter() {
    return ( 
        <div>
            <div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
            </div>
            <div>
            <div>{data.Footer.miinfo[0].escuela}</div>
            <div>{data.Footer.miinfo[1].correo}</div>
            <div>{data.Footer.miinfo[2].localidad}</div>
            <div>{data.Footer.miinfo[3].telefono}</div>
            </div>
        </div>
     );
}

export default Foter;