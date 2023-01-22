import data from "../data/data.js";
import programacion from "../assets/icons/programacion.png";
import ejercicio from "../assets/icons/ejercicio.png";
import videogames from "../assets/icons/videogames.png";
import "../assets/Styles/Hobbies.css";

function Hobbies() {
    return ( 
           <>
           <h1>HOBBIES</h1>
        <div className="hobbies">
            <div className="programar">
            <img src={programacion} alt="" />
            <h2>Programar</h2>
            {data.hobbies.info[0].programar} 
            </div>
            <div className="ejercicio">
            <img src={ejercicio} alt="" />
            <h2>Ejercicio</h2>
            {data.hobbies.info[1].ejercicio} 
            </div>
            <div className="videojuegos">
            <img src={videogames} alt="" />
            <h2>Videojuegos</h2>
            {data.hobbies.info[2].videojuegos}
            </div>
        </div>
        </> 
     );
}

export default Hobbies;