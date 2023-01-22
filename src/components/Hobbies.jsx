import data from "../data/data.js";
import programacion from "../assets/icons/programacion.png";
import ejercicio from "../assets/icons/ejercicio.png";
import videogames from "../assets/icons/videogames.png";
import "../assets/Styles/Hobbies.css";

function Hobbies() {
    return ( 
        <div className="contenedor">
            <div>
           <h1>HOBBIES</h1>
        <div className="texto">
                <div className="programing"> <img src={programacion} alt="" className="programacion"/>  <h2>PROGRAMAR</h2>      {data.hobbies.info[0].programar}</div>
                <div className="exercise">   <img src={ejercicio} alt="" className="ejercicio"/>        <h2>EJERCICIO</h2>      {data.hobbies.info[1].ejercicio}</div>
                <div className="videogames">  <img src={videogames} alt="" className="videojuegos"/>    <h2>VIDEOJUEGOS</h2>    {data.hobbies.info[2].videojuegos}</div>
        </div>
            </div>
        </div> 
     );
}

export default Hobbies;